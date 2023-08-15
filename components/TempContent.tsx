'use client';
import React, { useState, useEffect } from 'react';
import { ALL_CONTENT } from '@/utils/constants';
import { throttle } from '@/utils/utilFunctions';
import Image from 'next/image';

const TempContent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener('scroll', throttledListenToScroll);

    return () => {
      window.removeEventListener('scroll', throttledListenToScroll);
    };
  });

  const listenToScroll = () => {
    const scrollY = document.documentElement.scrollTop;
    if (scrollY <= 150) {
      if (isVisible) setIsVisible(false);
    } else {
      if (!isVisible) setIsVisible(true);
    }
  };
  const throttledListenToScroll = throttle(listenToScroll, 100);

  return (
    <div
      id="experiences"
      className={`experiences ${!isVisible && '-translate-y-30 opacity-0'} -z-10 relative`}
    >
      {ALL_CONTENT.map((content, index) => (
        <section
          key={index}
          className={`sm:grid p-10 max-w-screen-lg m-auto sm:gap-x-9 sm:gap-y-3 ${
            index % 2 ? 'section--right' : 'section--left'
          }`}
        >
          <div className="section__img-wrapper h-56">
            <Image fill={true} className="object-contain" src={content.img} alt="MISSING IMAGE" />
          </div>
          <h2 className="section__title">{content.title}</h2>
          <p className="section__description">{content.description}</p>
        </section>
      ))}
    </div>
  );
};

export default TempContent;
