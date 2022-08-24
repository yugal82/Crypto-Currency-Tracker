import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { LinearProgress } from '@material-ui/core';
import CoinChart from '../components/CoinChart';

const CoinPage = () => {
  const { id } = useParams();

  const [coinData, setCoinData] = useState()



  const fetchSingleCoin = async () => {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const data = await res.json();
    setCoinData(data);
  }
  // console.log(coinData);
  useEffect(() => {
    fetchSingleCoin()
  }, [])

  const priceWithCommas = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!coinData) return <LinearProgress style={{ backgroundcolor: 'gold' }} />

  return (
    <>
      <div className='coin-page container-fluid'>
        <div className="sidebar-section">
          <div className="coin-info">
            <img src={coinData?.image.large} alt="" />
            <h2>{coinData?.name}</h2>
            <p className='description'>{ReactHtmlParser(coinData?.description.en.split('. ')[0])}</p>
          </div>
          <div className="market-info">
            <p className='rank'>Rank: <span>{coinData?.coingecko_rank}</span> </p>
            <p className='current-price'>Current Price: $<span>{priceWithCommas(coinData?.market_data.current_price.usd)}</span></p>
            <p className='market-cap'>Market Cap: $<span>{priceWithCommas(coinData?.market_data.market_cap.usd)}</span></p>
          </div>

        </div>
        <CoinChart coin={coinData} />
      </div>
    </>
  )
}

export default CoinPage