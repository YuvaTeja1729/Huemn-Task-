// src/components/FastPage.js
import React from 'react';
import './FastPage.css';

const FastPage = () => {
  return (
    <div className="fast-page">
      <h2>FAST Mode</h2>
      <div className="fast-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p>Experience the speed you need with FAST mode. Everything loads in a flash!</p>
    </div>
  );
};

export default FastPage;

