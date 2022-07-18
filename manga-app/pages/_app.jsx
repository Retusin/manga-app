import React from 'react'
import NextNProgress from 'nextjs-progressbar'

import Layout from '../components/Layout/Layout'

import 'react-slideshow-image/dist/styles.css'
import '../assets/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNProgress color="#E48DB2" height={2} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
