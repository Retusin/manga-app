import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';
import Head from 'next/head';
import ReactPlayer from 'react-player';

export const getStaticPaths = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/anime');
  const data = await res.json();

  const paths = data.data.map(anime => {
    return {
      params: {id: anime.mal_id.toString()},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const respons = await fetch(`https://api.jikan.moe/v4/anime/${id}/full`);
  const data = await respons.json();

  return {
    props: {
      anime: data,
    },
  };
};

const Details = ({anime}) => {
  return (
    <div>
      <Head>
        <title>Mangas | {anime.data?.title_japanese}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10 px-10 pt-10">
        <div className="flex flex-col mx-auto text-center  md:my-0 md:flex-row md:text-start items-center justify-center gap-[100px]">
          <div className="max-w-[450px]">
            <span className="text-pink-400 font-semibold">{anime.data?.title_japanese}</span>
            <h2 className="text-3xl font-bold my-3">{anime.data?.title}</h2>
            <div className="flex gap-10 items-center justify-center md:justify-start mb-7">
              <div className="bg-pink-400 py-1 px-2 rounded-xl font-bold text-sm">
                {anime.data?.year}
              </div>
              <div className="bg-pink-400 flex items-center gap-2 py-1 px-2 rounded-xl font-bold text-sm">
                <AiFillStar color="ffd700" />
                <span>{anime.data?.score}</span>
              </div>
            </div>
            <p className="font-semibold">{anime.data.synopsis}</p>
          </div>
          <div className=" rounded-xl max-h-[500px]">
            <Image
              className="rounded-xl"
              src={anime.data.images.jpg.large_image_url}
              width="500"
              height="500"
              alt="Anime"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  my-12">
        <ReactPlayer url={anime.data?.trailer.url} playing muted={true} />
      </div>
    </div>
  );
};

export default Details;
