import React from 'react'
import { Link } from 'react-router-dom';

const CollectionCard = ({ collection }) => {
    return (
        <Link to={`/nft-collection/${collection.contracts[0].contract_address}`} >
            <div className='collection_card'>
                <div className='collection_img'>
                    <img src={collection?.image_url} alt="" />
                </div>
                <div className='collection_name'>
                    <span>{collection?.name}</span>
                </div>
            </div>
        </Link>
    )
}

export default CollectionCard;
