import React from 'react';
import {Zoom} from 'react-slideshow-image';
import Image from 'next/image';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

import image1 from '../../assets/images/slider-1.jpg';
import image2 from '../../assets/images/slider-2.jpg';
import image3 from '../../assets/images/slider-3.jpg';
import image4 from '../../assets/images/slider-4.jpg';

const MangaSlider = () => {
  const images = [image1, image2, image3, image4];

  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 3000,
    transitionDuration: 500,
    infinity: true,
    autoplay: true,

    prevArrow: (
      <div style={{width: '20px', marginRight: '0px', cursor: 'pointer'}}>
        <AiOutlineArrowLeft size={25} className="text-pink-500" />
      </div>
    ),

    nextArrow: (
      <div style={{width: '-20px', marginRight: '0px', cursor: 'pointer'}}>
        <AiOutlineArrowRight size={25} className="text-pink-500" />
      </div>
    ),
  };
  return (
    <div className="container">
      <div className="my-10">
        <h1 className="text-center text-3xl font-semibold mb-6">Posters</h1>
        <Zoom {...zoomInProperties}>
          {images.map((each, i) => (
            <div key={i} className="flex justify-center w-full h-full">
              <Image
                src={each}
                className="w-3/4 object-cover rounded-xl"
                width="600px"
                height="600px"
                alt="slider"
              />
            </div>
          ))}
        </Zoom>
      </div>
    </div>
  );
};

export default MangaSlider;
