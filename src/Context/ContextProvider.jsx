import React, { createContext } from 'react';

export const context = createContext();

const ContextProvider = ({ children }) => {

    const getAllNFTCollection = async () => {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'X-API-KEY': process.env.BLOCK_SPAN_API
            }
        }
        const url = 'https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=100';
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }

    // const getAllNFTCollectionByBlockDaemon = async () => {
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             "Content-Type": "application/json",
    //             authorization: `Bearer ${process.env.BLOCK_DAEMON_API}`
    //         }
    //     }
    //     const url = 'https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/collections?sort_by=name&order=asc'
    //     const res = await fetch(url, options);
    //     const data = await res.json();
    //     console.log(data);
    // }

    return (
        <context.Provider value={{ getAllNFTCollection }}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider;
