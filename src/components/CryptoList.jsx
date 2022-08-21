import { makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react'
import CryptoCard from './CryptoCard';

const useStyles = makeStyles(() => ({
    pagination: {
        "& .MuiPaginationItem-root": {
            color: 'black',
        },
    }
}))

const CryptoList = () => {

    const classes = useStyles();

    const [coinData, setCoinData] = useState([]);
    const [slicedData, setSlicedData] = useState([])
    // const [page, setPage] = useState(1);
    const [firstRender, setFirstRender] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const [filterData, setFilterData] = useState([])

    const handleOnChange = (e) => {
        const value = e.target.value;
        // console.log(value);
        setInputVal(value);

        const filterCoins = coinData.filter((coin) =>
            coin.name.toLowerCase().includes(value.toLowerCase()) || coin.symbol.toLowerCase().includes(value.toLowerCase())
        )

        setFilterData(filterCoins);

    }

    const fetchCoins = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d');
        const data = await res.json();
        setCoinData(data);
    }


    const handlePageChange = (e, value) => {
        setFirstRender(false);
        // setPage(value);
        const slicedCoinData = coinData.slice((value - 1) * 10, (value - 1) * 10 + 10);
        // console.log(slicedCoinData);
        setSlicedData(slicedCoinData);
        window.scroll(0, 450);
    }

    useEffect(() => {
        fetchCoins();
        setFirstRender(true);
    }, [])

    return (
        <>
            <div className='coin-list'>
                <div className="coin-list-heading">
                    <h3>Top 100 <span>Crypto Currency</span></h3>
                </div>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder='Search for you favorite crypto...'
                        defaultValue={inputVal}
                        onChange={handleOnChange}
                    />
                    {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                </div>
                <div className="coin-table">
                    <div className="coin-info-row">
                        <div className="coin-name">Coin</div>
                        <div className="coin-price">Price</div>
                        <div className="coin-24h-change">24h Change</div>
                        <div className="coin-market-cap">Market cap</div>
                    </div>
                </div>
                <div className="coin-table-list">
                    {
                        inputVal === '' ? <div>
                            {
                                firstRender ? coinData.slice(0, 10).map((coin, index) => (
                                    <CryptoCard coinInfo={coin} key={index} />
                                )) :
                                    slicedData.map((coin, index) => (
                                        <CryptoCard coinInfo={coin} key={index} />
                                    ))
                            }
                        </div> :
                            filterData.map((coin, index) => (
                                <CryptoCard coinInfo={coin} key={index} />
                            ))
                    }
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
                    onChange={handlePageChange}
                />
            </div>
        </>
    )
}

export default CryptoList