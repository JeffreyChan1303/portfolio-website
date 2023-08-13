import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">JEFFREY CHAN</h1>
      <h5 className="hero__subtitle">SOFTWARE ENGINEER</h5>
      <div className="hero__btn-wrapper">
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
