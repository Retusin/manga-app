import React from 'react';
import Image from 'next/image';

import heroImg from '../../assets/images/heroImg.png';

const Hero = () => {
  return (
    <div className="h-screen mt-10 px-5">
      <div className="text-center mb-5">
        <Image src={heroImg} width="300" height="400" alt="hero image" />
      </div>
      <div className="text-center ">
        <h1 className="text-4xl max-w-[500px] font-semibold mx-auto mb-4">
          Your <span className="text-pink-400">manga</span> online legally and without ads
        </h1>
        <p className="text-lg">
          Read your subscription manga and find new chapters available every week from €6.90 per
          month.
        </p>
      </div>
    </div>
  );
};

export default Hero;
