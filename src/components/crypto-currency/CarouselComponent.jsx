import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'


const CarouselComponent = () => {

    const [coinData, setCoinData] = useState([]);

    const priceWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const fetchTrendingCoins = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d');
        const data = await res.json();
        setCoinData(data)
    }

    useEffect(() => {
        fetchTrendingCoins();
    }, [])


    const items = coinData.map((coin) => {
        let profit = coin.price_change_percentage_24h_in_currency >= 0
        return (
            <Link to={`/coins/${coin.id}`}>
                <div className='carousel-coin'>
                    <img src={coin.image} alt='' />
                    <span>{coin.symbol}
                        &nbsp;
                        <span style={{
                            color: profit > 0 ? 'rgb(14,203,129)' : 'red',
                            fontWeight: 500,
                        }}>
                            {profit ? `+${coin.price_change_percentage_24h_in_currency.toFixed(2)}%` : `${coin.price_change_percentage_24h_in_currency.toFixed(2)}%`}
                        </span>
                    </span>
                    <div className="carousel-coin-price">
                        <span>{`$${priceWithCommas(coin.current_price.toFixed(2))}`}</span>
                    </div>
                </div>
            </Link>
        )
    })

    const responsive = {
        0: {
            items: 2,
        },
        1024: {
            items: 4,
        }
    }

    return (
        <div className='caraousel-card banner'>
            <AliceCarousel
                mouseTracking
                infinite={true}
                autoPlayInterval={2000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>

    )
}

export default CarouselComponent;
