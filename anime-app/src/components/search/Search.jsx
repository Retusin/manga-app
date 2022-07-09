import React from 'react';
import AnimeCard from './AnimeCard';

const Search = () => {
  const [search, setSearch] = React.useState('');
  const [animeList, setAnimeList] = React.useState([]);
  const HandleSearch = e => {
    e.preventDefault();
    FetchAnime(search);
  };
  const FetchAnime = async query => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then(res => res.json());
    setAnimeList(temp.results);
  };

  return (
    <div className="my-20">
      <div className="text-center">
        <form className="mb-10" onSubmit={HandleSearch}>
          <input
            className="px-4 rounded-xl border-2 border-orange-500 py-2 w-[300px]"
            type="text"
            placeholder="Search Anime..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {animeList !== 0 ? animeList.map(item => <AnimeCard key={item.mal_id} {...item} />) : ''}
        </div>
      </div>
    </div>
  );
};

export default Search;
