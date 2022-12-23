import React, { useEffect, useState } from 'react'
import ExchangeCard from '../components/exchanges/ExchangeCard'

const Exchanges = () => {
    const [exchangesData, setExchangesData] = useState([]);

    const fetchExchangesData = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/exchanges?per_page=10');
        const data = await res.json();
        setExchangesData(data);
    }

    useEffect(() => {
        fetchExchangesData();
    }, [])


    return (
        <div className='container exchange-page'>
            <h2>Top 10 Crypto Exchanges in the World!</h2>
            <div className="exchange-table">
                <div className="exchange-info-row">
                    <div className="exchange-rank">Rank</div>
                    <div className="exchange-name">Exchange Name</div>
                    <div className="btc-24h-vol">
                        <span>BTC traded volume</span>
                        <small>(in last 24 hrs)</small>
                    </div>
                </div>
                <div className="exchange-cards-map">
                    {
                        exchangesData.map((exchange, index) => (
                            <ExchangeCard key={index} data={exchange} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Exchanges;
