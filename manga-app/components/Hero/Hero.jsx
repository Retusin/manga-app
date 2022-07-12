import Image from 'next/image';
import React from 'react';

import heroImg from '../../assets/images/heroImg.png';

const Hero = () => {
  return (
    <div className="h-screen px-4 w-full flex items-center justify-center">
      <div className="text-center  flex items-center justify-between flex-col">
        <Image className="mb-4" src={heroImg} width="367px" height="512px" alt="hero" />
        <div className="mx-auto">
          <h1 className="text-4xl mb-4 font-semibold">
            Your <span className="text-pink-500">manga</span> online legally and without ads
          </h1>
          <p className="mb-4">
            Read your subscription manga and find new chapters available every week from €6.90 per
            month.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
