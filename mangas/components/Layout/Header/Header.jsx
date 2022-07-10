import Link from 'next/link';
import React from 'react';
import {navbar} from './../../../utils/data';
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
    <div className="bg-[#231b27] p-5">
      <div className="flex items-center justify-between">
        <h4 className="text-2xl uppercase font-semibold">
          manga<span className="text-pink-400 font-thin">.app</span>
        </h4>
        <ul className="flex gap-5 mr-auto ml-20">
          {navbar.map((item, i) => (
            <Link key={i} href={item.path}>
              <li className="uppercase cursor-pointer hover:text-pink-400 duration-100 ease-in-out transition text-white">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-5">
          <HeaderButton title="Login" bg="bg-[#302836]" />
          <HeaderButton title="Register" bg="bg-[#cf1c6a]" />
        </div>
      </div>
    </div>
  );
};

export default Header;
