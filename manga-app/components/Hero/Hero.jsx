import Image from 'next/image'
import React from 'react'

import heroImg from '../../assets/images/heroImg.png'

function Hero() {
  return (
    <div className="flex h-screen w-full  items-center justify-center px-4">
      <div className="flex  flex-col items-center justify-between text-center">
        <Image
          className="mb-4"
          src={heroImg}
          width="328px"
          height="458px"
          alt="hero"
        />
        <div className="mx-auto">
          <h1 className="mb-4 text-4xl font-semibold">
            Your <span className="text-pink-500">manga</span> online legally and
            without ads
          </h1>
          <p className="mb-4">
            Read your subscription manga and find new chapters available every
            week from €6.90 per month.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
