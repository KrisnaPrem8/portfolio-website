import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">Dammati Krisna Prem</h1>
      <nav>
        <a href="#home" className="mx-4">Home</a>
        <a href="#projects" className="mx-4">Projects</a>
        <a href="#about" className="mx-4">About</a>
        <a href="#contact" className="mx-4">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
