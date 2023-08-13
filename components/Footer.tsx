import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

const Footer = () => {
  return (
    <footer className="mb-9 mt-9">
      <div className="flex justify-center">
        <Link
          className="p-2"
          href="/assets/7_31_2023 Resume Jeffrey Chan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Link>
      </div>

      <div className="max-w-screen-lg h-px bg-black opacity-40 m-auto" />

      <div className="flex justify-center gap-3">
        <Link
          className="p-2"
          href="https://github.com/JeffreyChan1303"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          className="p-2"
          href="https://www.linkedin.com/in/jeffrey-chan-1303/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
