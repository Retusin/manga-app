import React from 'react';

const AnimeCard = item => {
  return (
    <div className="relative ">
      <a href={item.url}>
        <div className="bg-gray-400  flex w-[200px] rounded-xl">
          <img
            className=" w-[300px] h-[300px] border-orange-500 border-2 rounded-xl"
            src={item.image_url}
            alt="/"
          />
        </div>
      </a>
    </div>
  );
};

export default AnimeCard;
