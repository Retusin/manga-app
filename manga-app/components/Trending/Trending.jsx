import React from 'react';
import Image from 'next/image';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Link from 'next/link';

const Trending = ({anime}) => {
  const rowRef = React.useRef(null);
  const [isMoved, setIsMoved] = React.useState(false);

  const handleClick = direction => {
    setIsMoved(true);
    if (rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current;

      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'});
    }
  };
  return (
    <div className="my-10">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-5">Popular Anime</h2>
        <div className="flex relative group gap-x-5 items-center scrollbar-hide overflow-x-scroll">
          <AiOutlineArrowLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && 'hidden'
            }`}
            onClick={() => handleClick('left')}
          />
          <div
            ref={rowRef}
            className="flex relative group gap-x-5 items-center scrollbar-hide overflow-x-scroll"
          >
            {anime.data.map(item => (
              <Link key={item.mal_id} href={`/animes/${item.mal_id}`}>
                <div
                  style={{backgroundImage: `url(${item.images.jpg.large_image_url})`}}
                  className="h-[220px] bg-cover bg-center bg-no-repeat min-w-[200px] cursor-pointer"
                />
              </Link>
            ))}
          </div>
          <AiOutlineArrowRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
