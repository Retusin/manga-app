import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AnimesItem({ item }) {
  return (
    <div className="cursor-pointer">
      <Link href={`/animes/${item.mal_id}`}>
        <div>
          <Image
            src={item.images.jpg.image_url}
            className="rounded-xl"
            height={200}
            width={200}
            alt="/"
          />
        </div>
      </Link>
    </div>
  )
}

export default AnimesItem
