import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import Thumbnail from '../Thumbnail/Thumbnail';

const MangaTop = ({manga}) => {
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
    <div className="container">
      <div className="my-[80px]">
        <h2 className="w-56 mb-8 cursor-pointer text-sm font-semibold md:text-2xl">Top Anime</h2>
        <div className="relative group md:-ml-2">
          <AiOutlineArrowLeft
            onClick={() => handleClick('left')}
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer text-pink-900 bg-white rounded-full p-2 border opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && 'hidden'
            }`}
          />
          <div
            ref={rowRef}
            className="flex items-center space-x-2.5 scrollbar-hide overflow-x-scroll md:space-x-4 md:-2"
          >
            {manga.data.map((mang, i) => (
              <Thumbnail key={mang.title} manga={mang} />
            ))}
          </div>
          <AiOutlineArrowRight
            onClick={() => handleClick('right')}
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 text-pink-900 bg-white rounded-full p-2 border"
          />
        </div>
      </div>
    </div>
  );
};

export default MangaTop;
