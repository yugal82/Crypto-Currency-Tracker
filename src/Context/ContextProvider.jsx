import React, { createContext } from 'react';

export const context = createContext();

const BLOCK_SPAN_OPTIONS = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": "8SXGNzbNnvbo3QnkWXDVYiYQLXGcDl24"
    }
}

const BLOCK_DAEMON_OPTIONS = {
    method: 'GET',
    headers: {
        "Content-Type": "application/json",
        authorization: `Bearer Ok-kPy1Xuy04MIozGNgbYUgN1brBgOgIDRGC1xAYZDwdSOBA`
    }
}

const ContextProvider = ({ children }) => {

    const getAllNFTCollection = async () => {
        const url = 'https://api.blockspan.com/v1/exchanges/collections?chain=eth-main&exchange=opensea&page_size=16';
        const res = await fetch(url, BLOCK_SPAN_OPTIONS);
        const data = await res.json();
        return data;
    }

    const getContractDetails = async (contract_address) => {
        const url = `https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/collection?contract_address=${contract_address}`;
        const res = await fetch(url, BLOCK_DAEMON_OPTIONS);
        const data = await res.json();
        return data;
    }

    return (
        <context.Provider value={{ getAllNFTCollection, getContractDetails }}>
            {children}
        </context.Provider>
    )
}

export default ContextProvider;
