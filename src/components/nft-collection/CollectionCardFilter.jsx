import React from 'react'
import { Link } from 'react-router-dom';

const CollectionCardFilter = ({ collection }) => {
    
    const contract_address = collection?.contracts[0];

    return (
        <div>
            <Link to={`/nft-collection/${contract_address}`} >
                <div className='collection_card'>
                    <div className='collection_img'>
                        <img src={`https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/media/${collection?.logo}?apiKey=Ok-kPy1Xuy04MIozGNgbYUgN1brBgOgIDRGC1xAYZDwdSOBA`} alt="" />
                    </div>
                    <div className='collection_name'>
                        <span>{collection?.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CollectionCardFilter;
