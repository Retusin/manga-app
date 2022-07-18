import Head from 'next/head'
import React from 'react'

import Hero from '../components/Hero/Hero'
import Trending from '../components/Trending/Trending'
import TrendingManga from '../components/TrendingManga/TrendingManga'
import MangaSlider from '../components/MangaSlider/MangaSlider'

export default function Home({ anime, manga }) {
  return (
    <div>
      <Head>
        <title>Mangas | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />
        <MangaSlider />
        <Trending anime={anime} />
        <TrendingManga manga={manga} />
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const anime = await fetch('https://api.jikan.moe/v4/top/anime')
  const manga = await fetch('https://api.jikan.moe/v4/top/manga')
  const animeData = await anime.json()
  const mangaData = await manga.json()

  return {
    props: {
      anime: animeData,
      manga: mangaData,
    },
  }
}
