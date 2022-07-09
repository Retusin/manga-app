import React from 'react';
import TopManga from '../components/top-manga/TopManga';

import Hero from './../components/hero/Hero';
import Top from './../components/top/Top';
import Search from './../components/search/Search';

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      <Search />
      <Top />
      <TopManga />
    </div>
  );
};

export default HomePage;
