import Link from 'next/link';
import React from 'react';

import HeaderButton from './HeaderButton';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import Modal from './../../Modal/Modal';

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
  const [nav, setNav] = React.useState(false);
  const [modalActive, setModalActive] = React.useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="py-3 px-10 bg-[#13142ba3] z-[100]">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <h3 className="text-2xl cursor-pointer font-semibold uppercase">
              Manga<span className="text-pink-400 uppercase font-thin">.app</span>
            </h3>
          </Link>
        </div>
        <ul className="hidden md:flex gap-5 mr-auto ml-10 items-center">
          {navbar.map(item => (
            <Link key={item.name} href={item.path}>
              <li className="hover:text-pink-400 duration-100 text-[14px] transition ease-in-out cursor-pointer uppercase">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="gap-5 hidden md:flex">
          <HeaderButton title="Login" bg="bg-[#302836]" path="/login" />
          <HeaderButton title="Register" bg="bg-[#CA1B67]" path="/register" />
        </div>
        <div onClick={handleNav} className="md:hidden z-20 text-white">
          {nav ? (
            <AiOutlineClose color="#fff" size={25} />
          ) : (
            <AiOutlineMenu color="#fff" size={25} />
          )}
        </div>
        <ul
          className={
            nav
              ? 'absolute w-full h-screen bg-black z-10 flex items-center justify-center flex-col gap-10 top-0 left-0 right-0 bottom-0'
              : 'absolute w-full h-screen bg-black z-10 flex items-center justify-center flex-col gap-10 top-0 left-[-100%] right-0 bottom-0'
          }
        >
          {navbar.map(item => (
            <Link key={item.name} href={item.path}>
              <li className="hover:text-pink-400 duration-100 text-4xl text-[14px] transition ease-in-out cursor-pointer uppercase">
                {item.name}
              </li>
            </Link>
          ))}
          <div className="flex flex-col gap-10">
            <HeaderButton title="Login" bg="bg-[#302836]" path="/login" />
            <HeaderButton title="Register" bg="bg-[#CA1B67]" path="/register" />
          </div>
        </ul>
      </div>
      {/* <Modal activeModal={activeModal} setModalActive={setModalActive} /> */}
    </div>
  );
};

export default Header;
