import React from 'react';
import { Hero } from '../components/MainPage/Hero';
import { Navbar } from '../components/Navbar/Navbar';

export const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};
