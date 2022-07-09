import React from 'react';
import {FaBookOpen} from 'react-icons/fa';

const MangaItem = item => {
  return (
    <div className="relative ">
      <div className="bg-gray-400  flex w-[200px] rounded-xl">
        <img
          className=" w-[300px] h-[300px] border-orange-500 border-2 rounded-xl"
          src={item.images.jpg.image_url}
          alt="/"
        />
      </div>
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full rounded-xl hover:bg-black/75 group duration-150 ease-in-out transition-all">
        <div className="hidden group-hover:flex items-center text-center justify-center h-full text-sm cursor-pointer text-white font-semibold">
          <FaBookOpen size={40} color="#e8e8e8" />
        </div>
      </div>
    </div>
  );
};

export default MangaItem;
