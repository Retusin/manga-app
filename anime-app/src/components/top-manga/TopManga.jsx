import axios from 'axios';
import React from 'react';

import {baseUrl} from './../../services/url';
import MangaItem from './../manga-item/MangaItem';

const TopManga = () => {
  const [manga, setManga] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseUrl}/top/manga`).then(res => {
      setManga(res.data.data);
    });
  }, [setManga]);
  return (
    <div className="my-10">
      <div>
        <h1 className="text-center mb-10 font-bold text-2xl">Top Manga</h1>
        <ul className="flex space-x-10 overflow-x-scroll scrollbar-hide">
          {manga.map(item => (
            <MangaItem key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopManga;
