import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__title">JEFFREY CHAN</h1>
      <h5 className="hero__subtitle">SOFTWARE ENGINEER</h5>
      <div>
        <button>btn 1 </button>
        <Link href="" />
        <Link href="" />
      </div>
    </div>
  );
};

export default Hero;
