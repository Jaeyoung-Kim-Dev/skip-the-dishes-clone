import React from 'react';
import { Benefits } from './Benefits';
import { Cards } from './Cards';
import { DownloadOurApp } from './DownloadOurApp';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { NowServing } from './NowServing';
import { PopularCuisines } from './PopularCuisines';
import { SkipRewards } from './SkipRewards';

interface Props {}

export const Main = (props: Props) => {
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
