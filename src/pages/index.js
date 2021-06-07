import React from 'react';
import { Benefits } from '../components/MainPage/Benefits';
import { Cards } from '../components/MainPage/Cards';
import { DownloadOurApp } from '../components/MainPage/DownloadOurApp';
import { Footer } from '../components/MainPage/Footer';
import { Hero } from '../components/MainPage/Hero';
import { NowServing } from '../components/MainPage/NowServing';
import { PopularCuisines } from '../components/MainPage/PopularCuisines';
import { SkipRewards } from '../components/MainPage/SkipRewards';

export const MainPage = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <SkipRewards />
      <DownloadOurApp />
      <Cards />
      <NowServing />
      <PopularCuisines />
      <Footer />
    </div>
  );
};
