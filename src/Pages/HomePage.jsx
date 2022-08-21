import React from 'react'
import CarouselComponent from '../components/CarouselComponent'
import CryptoList from '../components/CryptoList'
import Hero from '../components/Hero'

const HomePage = () => {

  return (
    <>
        <Hero />
        <CarouselComponent />
        <CryptoList />
    </>
  )
}

export default HomePage