import { Container } from '@material-ui/core'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="banner">
                <Container>
                    <div className="hero-content">
                        <div className="hero-heading">
                            <h3>Cryptopedia</h3>
                            <p>Get all the price info and tracking of your favorite Crypto-currency</p>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Hero;
