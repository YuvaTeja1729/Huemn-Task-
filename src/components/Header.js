// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#help">Help</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
