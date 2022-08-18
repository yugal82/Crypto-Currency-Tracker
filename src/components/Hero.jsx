import { Container } from '@material-ui/core'
import React from 'react'
import Carousel from './Carousel'
import Header from './Header'



const Hero = () => {
    return (
        // <div className='container-fluid hero'>
        <>
            <Header />
            <div className="banner">
                <Container>
                    <div className="hero-content">
                        <div className="hero-heading">
                            <h3>Crypto Hunter</h3>
                            <p>Get all the price info and tracking of your favorite Crypto-currency</p>
                        </div>
                        <div className="hero-carousel">
                            <Carousel />
                        </div>
                    </div>
                </Container>
            </div>
        </>
        // </div>

    )
}

export default Hero