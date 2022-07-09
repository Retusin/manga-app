import React from 'react';
import TopManga from '../components/top-manga/TopManga';

import Hero from './../components/hero/Hero';
import Top from './../components/top/Top';

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <Top />
      <TopManga />
    </div>
  );
};

export default HomePage;
