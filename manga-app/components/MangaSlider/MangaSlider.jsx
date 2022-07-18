import React from 'react'
import { Slide } from 'react-slideshow-image'
import Image from 'next/image'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { images } from '../../utils/data'

import 'react-slideshow-image/dist/styles.css'

function MangaSlider() {
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 1000,
    infinity: true,
    autoplay: true,

    prevArrow: (
      <div style={{ width: '20px', marginRight: '0px', cursor: 'pointer' }}>
        <AiOutlineArrowLeft size={25} className="text-pink-500" />
      </div>
    ),

    nextArrow: (
      <div
        style={{
          width: '-20px',
          marginRight: '0px',
          cursor: 'pointer',
        }}
      >
        <AiOutlineArrowRight size={25} className="text-pink-500" />
      </div>
    ),
  }
  return (
    <div className="container">
      <div className="my-10">
        <h1 className="mb-6 text-center text-3xl font-semibold">Posters</h1>
        <Slide {...zoomInProperties}>
          {images.map((each) => (
            <div key={each.id} className="flex h-full w-full justify-center">
              <Image
                src={each.image}
                className="w-3/4 rounded-xl object-cover"
                width="600px"
                height="600px"
                alt="slider"
              />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default MangaSlider
