import React from 'react'
import AnimesItem from '../../components/AnimesItem/AnimesItem'

const index = ({ animeList }) => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-2xl font-semibold">Anime List</h2>
        <ul className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {animeList.data.map((item) => (
            <li key={item.mal_id}>
              <AnimesItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const request = await fetch('https://api.jikan.moe/v4/anime')
  const data = await request.json()

  return {
    props: {
      animeList: data,
    },
  }
}
