import axios from 'axios';
import React from 'react';
import {baseUrl} from './../../services/url';
import TopItem from './../top-item/TopItem';

const Top = () => {
  const [top, setTop] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${baseUrl}/top/anime`).then(res => {
      setTop(res.data.data);
    });
  }, [setTop]);
  return (
    <div className="my-10">
      <div>
        <h1 className="text-center mb-10 font-bold text-2xl">Top Anime</h1>
        <ul className="flex space-x-10 overflow-x-scroll scrollbar-hide whitespace-nowrap">
          {top.map(item => (
            <TopItem key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Top;
