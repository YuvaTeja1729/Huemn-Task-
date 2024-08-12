// src/components/AnimationSection.js
import React from 'react';
import './AnimationSection.css';

const AnimationSection = () => {
  return (
    <section className="animation-section">
      <h2>Speed You Need</h2>
      <div className="animation-container">
        <div className="animated-box"></div>
        <div className="animated-box"></div>
        <div className="animated-box"></div>
      </div>
    </section>
  );
};

export default AnimationSection;

