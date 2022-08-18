import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';


const CoinPage = () => {
    const {id} = useParams();

    const [coinData, setCoinData] = useState()

    const fetchSingleCoin =  async () => {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoinData(data);
    }

    useEffect(() => {
      fetchSingleCoin()
    }, [])
    
    console.log(coinData);

    return (
    <div>{id}</div>
  )
}

export default CoinPage