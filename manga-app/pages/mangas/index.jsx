import React from 'react'
import MangaItem from '../../components/MangaItem/MangaItem'

const index = ({ mangaList }) => {
  return (
    <div className="py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-2xl font-semibold">Manga List</h2>
        <ul className="grid grid-cols-1 gap-4 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mangaList.data.map((item) => (
            <li key={item.mal_id}>
              <MangaItem item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default index

export const getServerSideProps = async () => {
  const request = await fetch('https://api.jikan.moe/v4/manga')
  const data = await request.json()

  return {
    props: {
      mangaList: data,
    },
  }
}
