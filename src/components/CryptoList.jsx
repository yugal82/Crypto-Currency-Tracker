import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'
import CryptoCard from './CryptoCard';

const useStyles = makeStyles(() => ({
    pagination: {
        "& .MuiPaginationItem-root": {
            color: 'white',
        },
    }
}))

const CryptoList = () => {
    const classes = useStyles();

    const [coinData, setCoinData] = useState([])

    const fetchCoins = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d');
        const data = await res.json();
        setCoinData(data);
    }

    useEffect(() => {
        fetchCoins();
    }, [])

    return (
        <>
            <div className='coin-list'>
                <div className="coin-list-heading">
                    <h3>Cryptocurrency price by Market price</h3>
                </div>
                <div className="coin-table">
                    <div className="coin-info-row">
                        <div className="coin-name">Coin </div>
                        <div className="coin-price">Price</div>
                        <div className="coin-24h-change">24h Change</div>
                        <div className="coin-market-cap">Market cap</div>
                    </div>
                </div>
                <div className="coin-table-list">
                    {coinData.map((coin, index) => (
                        <CryptoCard coinInfo={coin} key={index} i={index} />
                    ))}
                </div>
                <Pagination
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '20px 0px'
                    }}
                    className={classes.pagination}
                    count={10}
                    color='primary'
                    variant='outlined'
                    // defaultPage={1}
                />
            </div>
        </>
    )
}

export default CryptoList