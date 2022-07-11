import Image from 'next/image';
import {AiFillStar} from 'react-icons/ai';
import Head from 'next/head';

export const getStaticPaths = async () => {
  const res = await fetch('https://api.jikan.moe/v4/top/manga');
  const data = await res.json();

  const paths = data.data.map(manga => {
    return {
      params: {id: manga.mal_id.toString()},
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const respons = await fetch(`https://api.jikan.moe/v4/manga/${id}/full`);
  const data = await respons.json();
  console.log(data);
  return {
    props: {
      manga: data,
    },
  };
};

const Details = ({manga}) => {
  return (
    <div>
      <Head>
        <title>Mangas | {manga.data.title_japanese}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="my-10 px-10 pt-10">
        <div className="flex flex-col mx-auto text-center  md:my-0 md:flex-row md:text-start items-center justify-center gap-[100px]">
          <div className="max-w-[450px]">
            <span className="text-pink-400 font-semibold">{manga.data.title_japanese}</span>
            <h2 className="text-3xl font-bold my-3">{manga.data.title}</h2>
            <div className="flex gap-10 items-center justify-center md:justify-start mb-7">
              <div className="bg-pink-400 flex items-center gap-2 py-1 px-2 rounded-xl font-bold text-sm">
                <AiFillStar color="ffd700" />
                <span>{manga.data.score}</span>
              </div>
            </div>
            <p className="font-semibold">{manga.data.synopsis}</p>
          </div>
          <div className=" rounded-xl max-h-[500px]">
            <Image
              className="rounded-xl"
              src={manga.data.images.jpg.large_image_url}
              width="500"
              height="500"
              alt="Anime"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
