import Image from 'next/image';
import Head from 'next/head';
import {AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/anime');
  const data = await res.json();

  const paths = data.data.map(anim => {
    return {
      params: {
        id: anim.mal_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const characterRes = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
  const data = await res.json();
  const characterData = await characterRes.json();

  return {
    props: {
      anime: data,
      characters: characterData,
    },
  };
};

const Animes = ({anime, characters}) => {
  console.log(characters);
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
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(
          ${anime.data.images.jpg.large_image_url}
        )`,
      }}
    >
      <Head>
        <title>Mangas | {anime.data.title_japanese}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-4 w-full ">
        <div>
          <div className="z-[100] relative py-10 max-w-[500px] mb-10 md:mb-0">
            <span className="font-semibold text-pink-400">{anime.data.title_japanese}</span>
            <h2 className="my-3 text-3xl font-bold">{anime.data.title}</h2>
            <div className=" my-2 flex item-center gap-2">
              <span>
                <AiFillStar size={20} color="#ffd700" />
              </span>
              {anime.data.score} %
            </div>
            <p className="mb-1 font-semibold">{anime.data.synopsis}</p>
          </div>

          <div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[1]  bg-black/75" />
          </div>
        </div>
      </div>
      <div className="px-10 py-2 relative z-10">
        <h2 className="text-2xl mb-5 font-semibold">Characters</h2>
        <div className="flex relative group gap-x-5 items-center scrollbar-hide overflow-x-scroll">
          <AiOutlineArrowLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && 'hidden'
            }`}
            onClick={() => handleClick('left')}
          />
          <div
            ref={rowRef}
            className="flex relative gap-x-4 items-center scrollbar-hide overflow-x-scroll"
          >
            {characters.data.map(item => (
              <div
                key="item.data.character.mal_id"
                className="h-[260px] min-w-[200px] relative cursor-pointer bg-cover bg-center bg-no-repeat"
              >
                <Image
                  src={item.character?.images?.jpg.image_url}
                  alt="/"
                  className="rounded-xl"
                  width="200"
                  height="200"
                />
                <p className="font-semibold">{item.character.name}</p>
              </div>
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

export default Animes;
