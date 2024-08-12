// src/components/MainPage.js
import React from 'react';
import './MainPage.css';

const MainPage = () => {
  return (
    <main className="main-content">
      <section className="hero">
        <h1>Welcome to Chrome</h1>
        <p>Fast, secure, and free.</p>
        <button className="cta-button">Download Chrome</button>
      </section>
    </main>
  );
};

export default MainPage;
