import React from 'react'

const CryptoCard = (props) => {
    let profit = props.coinInfo.price_change_percentage_24h_in_currency >= 0

    const priceWithCommas = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    return (
        <div className="coin-info-row coin-card">
            <div className="coin-name">
                <div>
                    <img src={props.coinInfo.image} alt="" className="coin-image" />
                </div>
                <div className="coin-name-info">
                    <span>{props.coinInfo.symbol}</span>
                    <p>{props.coinInfo.name}</p>
                </div>
            </div>
            <div className="coin-price">
                {`$ ${priceWithCommas(props.coinInfo.current_price.toFixed(2))}`}
            </div>
            <div className="coin-24h-change">
                <span style={{
                    color: profit > 0 ? 'rgb(14,203,129)' : 'red',
                    fontWeight: 400,
                }}>
                    {profit ? `+${props.coinInfo.price_change_percentage_24h_in_currency.toFixed(2)}%` : `${props.coinInfo.price_change_percentage_24h_in_currency.toFixed(2)}%`}
                </span>
            </div>
            <div className="coin-market-cap">
                {`$ ${priceWithCommas(props.coinInfo.market_cap)}`}
            </div>
        </div>
    )
}

export default CryptoCard