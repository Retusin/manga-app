import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import heroImg from '../../assets/images/heroImg.png';

const Hero = () => {
  return (
    <div className="h-screen px-4 w-full flex items-center justify-center">
      <div className="text-center block flex items-center justify-between flex-col">
        <Image className="mb-4" src={heroImg} width="300px" height="400px" alt="hero" />
        <div className="mx-auto">
          <h1 className="text-4xl mb-4 font-semibold">
            Your <span className="text-pink-500">manga</span> online legally and without ads
          </h1>
          <p className="mb-4">
            Read your subscription manga and find new chapters available every week from €6.90 per
            month.
          </p>
          <Link href="/tarifs">
            <button className="py-2 px-3 bg-pink-500 cursor-pointer text-white font-semibold rounded-xl">
              See Tarifs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
