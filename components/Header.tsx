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
    console.log(document.documentElement.scrollTop);
    const scrollX = document.documentElement.scrollTop;
    if (scrollX <= 500) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  const throttledListenToScroll = throttle(listenToScroll, 100);

  return (
    <header className={`header ${!isVisible && '-translate-y-40 opacity-0'}`}>
      <h1 className="font-bold text-2xl">JC</h1>
      <div className="flex gap-5">
        <Link className="text-link p-2" href="#projects" target="_blank" rel="noopener noreferrer">
          Projects
        </Link>

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
