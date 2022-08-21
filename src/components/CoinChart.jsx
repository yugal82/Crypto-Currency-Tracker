import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'
import { Line } from 'react-chartjs-2'
import Button from './Button'

// https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}
const CoinChart = ({ coin }) => {

    const [historicData, setHistoricData] = useState([])
    const [days, setDays] = useState(1)

    const fetchHistoricData = async () => {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}`);
        const data = await res.json();
        setHistoricData(data.prices);
    }

    // console.log(historicData);

    const data = {
        labels: historicData?.map((coin) => {
            let date = new Date(coin[0]);
            let time =
                date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
        }),
        datasets: [
            {
                data: historicData.map((coin) => coin[1]),
                label: `Price ( Past ${days} Days ) in USD`,
                borderColor: "#14161A",
            },
        ],
    }

    useEffect(() => {
        fetchHistoricData();
    }, [days])

    return (
        <div className="chart-container">
            {
                !historicData ? (
                    <CircularProgress
                        style={{ color: 'black' }}
                        size={250}
                        thickness={1}
                    />
                ) : (
                    <>
                        <Line
                            data={data}
                            options={{
                                elements: {
                                    point: {
                                        radius: 1,
                                    },
                                },
                            }}
                        />
                        <div className="time-line-button">
                            <Button placeholder='1 day' onClick = {() => setDays(1)}/>
                            <Button placeholder='30 days' onClick = {() => setDays(30)}/>
                            <Button placeholder='3 months' onClick={() => setDays(180)}/>
                            <Button placeholder='1 year' onClick = {() => setDays(365)}/>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default CoinChart