import Link from 'next/link'
import React from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import HeaderButton from './HeaderButton'

const navbar = [
  {
    name: 'Animes',
    path: '/animes',
  },
  {
    name: 'Mangas',
    path: '/mangas',
  },
  {
    name: 'Tarifs',
    path: '/tarifs',
  },
]

function Header() {
  const [nav, setNav] = React.useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="z-[100] bg-[#13142ba3] py-3 px-10">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/">
            <h3 className="cursor-pointer text-2xl font-semibold uppercase">
              Manga
              <span className="font-thin uppercase text-pink-400">.app</span>
            </h3>
          </Link>
        </div>
        <ul className="mr-auto ml-10 hidden items-center gap-5 md:flex">
          {navbar.map((item) => (
            <Link key={item.name} href={item.path}>
              <li className="cursor-pointer text-[14px] uppercase transition duration-100 ease-in-out hover:text-pink-400">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
        <div className="hidden gap-5 md:flex">
          <HeaderButton title="Login" bg="bg-[#302836]" path="/login" />
          <HeaderButton title="Register" bg="bg-[#CA1B67]" path="/register" />
        </div>
        <div onClick={handleNav} className="z-20 text-white md:hidden">
          {nav ? (
            <AiOutlineClose color="#fff" size={25} />
          ) : (
            <AiOutlineMenu color="#fff" size={25} />
          )}
        </div>
        <ul
          className={
            nav
              ? 'absolute top-0 left-0 right-0 bottom-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-10 bg-black'
              : 'absolute top-0 left-[-100%] right-0 bottom-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-10 bg-black'
          }
        >
          {navbar.map((item) => (
            <Link key={item.name} href={item.path}>
              <li className="cursor-pointer text-4xl text-[14px] uppercase transition duration-100 ease-in-out hover:text-pink-400">
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
    </div>
  )
}

export default Header
