import React, { createContext, useState, useEffect } from 'react';

export const context = createContext();

const ContextProvider = ({ children }) => {

    const [allCollections, setAllCollections] = useState([]);

    const getAllNFTCollection = async () => {
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                // 'X-API-KEY': process.env.BLOCK_SPAN_API
                "X-API-KEY": "8SXGNzbNnvbo3QnkWXDVYiYQLXGcDl24"
            }
        }
        const url = 'https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=16';
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data);
        setAllCollections(data);
    }

    useEffect(() => {
        getAllNFTCollection();
    }, [])

    return (
        <context.Provider value={{ getAllNFTCollection, allCollections }}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider;
