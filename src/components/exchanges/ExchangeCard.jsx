import React from 'react'

const ExchangeCard = ({ data }) => {

    const priceWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <a href={data.url} target='_blank' rel="noreferrer">
            <div className='exchange-card exchange-info-row'>
                <div className="rank">
                    <span>{data.trust_score_rank}</span>
                </div>
                <div className="exchange-img-name">
                    <img src={data.image} alt="" className='coin-image' />
                    <h4>{data.name}</h4>
                </div >
                <div className="volume-trade">
                    <span>{priceWithCommas(data.trade_volume_24h_btc.toFixed(2))}</span>
                </div>
            </div>
        </a>
    )
}

export default ExchangeCard;
