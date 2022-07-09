import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-1">
        <img className="w-[60px] h-[60px]" src={logo} alt="Logo" />
        <span className="font-semibold text-white">AnimeApp</span>
      </div>
    </Link>
  );
};

export default Logo;
