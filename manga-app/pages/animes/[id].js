import Image from 'next/image';
import Head from 'next/head';

export const getStaticPaths = async () => {
  const res = await fetch('https://kitsu.io/api/edge/trending/anime');
  const data = await res.json();

  const paths = data.data.map(anim => {
    return {
      params: {
        id: anim.id.toString(),
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
  const res = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
  const data = await res.json();

  return {
    props: {
      anime: data,
    },
  };
};

const Animes = ({anime}) => {
  return (
    <div>
      <Head>
        <title>Mangas | {anime.data.attributes.titles.en_jp}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-20 my-10">
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          <div className="max-w-[500px] mb-10 md:mb-0">
            <span className="font-semibold text-pink-400">
              {anime.data.attributes.titles.ja_jp}
            </span>
            <h2 className="my-3 text-3xl font-bold">{anime.data.attributes.titles.en_jp}</h2>
            <p className="mb-3">{anime.data.attributes.averageRating}</p>
            <p className="mb-3 font-semibold">{anime.data.attributes.synopsis}</p>
          </div>
          <div>
            <Image
              src={anime.data.attributes.posterImage.original}
              className="rounded-xl"
              width="400px"
              height="400px"
              alt="Poster"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animes;
