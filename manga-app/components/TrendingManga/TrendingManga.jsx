import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

function TrendingManga({ manga }) {
  const rowRef = React.useRef(null)
  const [isMoved, setIsMoved] = React.useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <div className="my-20">
      <div className="container">
        <h2 className="mb-5 text-2xl font-semibold">Popular Manga</h2>
        <div className="group relative flex items-center gap-x-5 overflow-x-scroll scrollbar-hide">
          <AiOutlineArrowLeft
            className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
              !isMoved && 'hidden'
            }`}
            onClick={() => handleClick('left')}
          />
          <div
            ref={rowRef}
            className="relative flex  items-center gap-x-5 overflow-x-scroll scrollbar-hide"
          >
            {manga.data.map((item) => (
              <Link key={item.mal_id} href={`/mangas/${item.mal_id}`}>
                <div className="relative min-w-[200px] cursor-pointer bg-cover bg-center bg-no-repeat">
                  <Image
                    src={item.images.jpg.large_image_url}
                    width={200}
                    height={250}
                    className="rounded-xl"
                    alt="/"
                  />
                </div>
              </Link>
            ))}
          </div>
          <AiOutlineArrowRight
            className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
            onClick={() => handleClick('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default TrendingManga
