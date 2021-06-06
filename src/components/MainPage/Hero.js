import React from 'react';
import './style/Hero.scss';

export const Hero = () => {
  return (
    <div>
      {/* <img
        className='backgroundImage'
        src='images/desktop-large.webp'
        alt='default'
      /> */}
      <button className='find'>
        <span className='findText'>Find Restaurants In Your Area</span>
        <span></span>
      </button>
    </div>
  );
};
