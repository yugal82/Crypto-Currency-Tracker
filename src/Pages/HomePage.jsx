import React from 'react'
import CarouselComponent from '../components/crypto-currency/CarouselComponent'
import CryptoList from '../components/crypto-currency/CryptoList'
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