import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 relative z-0 h-screen justify-center items-center text-center">
      <h1 className="md:text-8xl sm:text-6xl text-5xl font-semibold">JEFFREY CHAN</h1>
      <h5 className="text-2xl mt-1 font-medium">SOFTWARE ENGINEER</h5>
      <div className="mt-8">
        <Link className="hero__btn" href="#projects">
          Projets
        </Link>
        <Link
          className="hero__btn"
          href="/assets/7_31_2023 Resume Jeffrey Chan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
