import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <div>header item</div>
      <div>header item</div>
      <div>header item</div>
      <div>header item</div>
      <Link
        className="p-2"
        href="/assets/7_31_2023 Resume Jeffrey Chan.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Link>
    </header>
  );
};

export default Header;
