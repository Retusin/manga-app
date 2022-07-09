import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './Logo';
import {navbar} from './../../utils/data';

const Header = () => {
  return (
    <div className="px-10 py-1 bg-gray-700 border-b-[3px] border-orange-500 text-white">
      <div className="flex items-center justify-between">
        <Logo />
        <ul className="flex items-center gap-7">
          {navbar.map((item, i) => (
            <Link key={i} to={item.pathUrl}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
