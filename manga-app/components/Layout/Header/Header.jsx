import Link from 'next/link';
import React from 'react';
import HeaderButton from './HeaderButton';

const navbar = [
  {
    name: 'Mangas',
    path: '/mangas',
  },
  {
    name: 'Tarifs',
    path: '/tarifs',
  },
];

const Header = () => {
  return (
    <div className="py-3 px-10 bg-[#231b27]">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <h3 className="text-2xl cursor-pointer font-semibold uppercase">
              Manga<span className="text-pink-400 uppercase font-thin">.app</span>
            </h3>
          </Link>
        </div>
        <ul className="flex gap-5">
          {navbar.map(item => (
            <Link key={item.name} href={item.path}>
              <li className="hover:text-pink-400 duration-100 transition ease-in-out cursor-pointer uppercase">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex gap-5">
          <HeaderButton title="Login" bg="bg-[#302836]" path="/login" />
          <HeaderButton title="Register" bg="bg-[#CA1B67]" path="/register" />
        </div>
      </div>
    </div>
  );
};

export default Header;
