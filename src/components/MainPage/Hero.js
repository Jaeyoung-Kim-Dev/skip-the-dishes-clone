import React from 'react';
import './style/Hero.scss';
import { Navbar } from './Navbar';

export const Hero = () => {
  return (
    <div className='hero-container'>
      <img
        className='backgroundImage'
        src='images/desktop-large.webp'
        alt='default'
      />
      <Navbar />
      <div className='searchAddress'>
        <div>EAT. PLAYOFFS. REPEAT</div>
        <button className='find'>
          <span className='findText'>Find Restaurants In Your Area</span>
          <span></span>
        </button>
      </div>
    </div>
  );
};
