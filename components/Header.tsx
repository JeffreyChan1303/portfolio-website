'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { throttle } from '@/utils/utilFunctions';

const Header = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', throttledListenToScroll);

    return () => {
      window.removeEventListener('scroll', throttledListenToScroll);
    };
  });

  const listenToScroll = () => {
    const scrollX = document.documentElement.scrollTop;
    if (scrollX <= 500) {
      if (isVisible) setIsVisible(false);
    } else {
      if (!isVisible) setIsVisible(true);
    }
  };
  const throttledListenToScroll = throttle(listenToScroll, 100);

  return (
    <header className={`header ${!isVisible && '-translate-y-20 opacity-0'}`}>
      <Link href="#" className="text-link font-bold text-2xl">
        JC
      </Link>
      <div className="flex gap-5">
        <a className="text-link p-2" href="#experiences">
          Experiences
        </a>

        <Link
          className="text-link p-2"
          href="/assets/7_31_2023 Resume Jeffrey Chan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </div>
    </header>
  );
};

export default Header;
