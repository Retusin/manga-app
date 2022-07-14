import React from 'react';
import Image from 'next/image';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import Link from 'next/link';
import {BsFillBookFill} from 'react-icons/bs';

const TrendingManga = ({manga}) => {
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
        <h2 className="text-2xl mb-5 font-semibold">Popular Manga</h2>
        <div className="flex relative group gap-x-5 items-center scrollbar-hide overflow-x-scroll">
          <AiOutlineArrowLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && 'hidden'
            }`}
            onClick={() => handleClick('left')}
          />
          <div
            ref={rowRef}
            className="flex relative  gap-x-5 items-center scrollbar-hide overflow-x-scroll"
          >
            {manga.data.map(item => (
              <Link key={item.id} href={`/mangas/${item.id}`}>
                <div
                  className="h-[220px] min-w-[200px] relative cursor-pointer bg-cover bg-center bg-no-repeat"
                  style={{backgroundImage: `url(${item.attributes.posterImage.small})`}}
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

export default TrendingManga;
