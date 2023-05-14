import React from 'react'
import HeroBanner from '../components/heroBanner/HeroBanner'
import Footer from '../components/footer/Footer'
import NFTCard from '../components/Card/NFTCard'
import Carousel from '../components/carousel/Carousel'

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Carousel />
      <Carousel />
      <Carousel />
      <Footer />
    </>
  )
}

export default Home
