import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { context } from '../../../Context/ContextProvider'

const CollectionDetails = () => {
  const params = useParams()

  const { getContractDetails } = useContext(context);

  const [collectionDetail, setCollectionDetail] = useState();

  const fetchContractDetails = async () => {
    const result = await getContractDetails(params.contract_address);
    setCollectionDetail(result);
  }

  useEffect(() => {
    fetchContractDetails();
    // eslint-disable-next-line
  }, [])


  return (
    <div className='container-fluid'>
      <div className='collection_banner'>
        <img src={`https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/media/${collectionDetail?.collection.logo}?apiKey=Ok-kPy1Xuy04MIozGNgbYUgN1brBgOgIDRGC1xAYZDwdSOBA`} alt="Banner" />
      </div>
      <div className="collection_details">
        <div className='collection_name_logo'>
          <div className='logo'>
            <img className='collection_logo' src={`https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/media/${collectionDetail?.collection.logo}?apiKey=Ok-kPy1Xuy04MIozGNgbYUgN1brBgOgIDRGC1xAYZDwdSOBA`} alt="Logo" />
          </div>
          <div className='collection_name'>
            <a href={`https://looksrare.org/collections/${params.contract_address}`} target='_blank' rel='noreferrer'><h3>{collectionDetail?.collection.name}</h3></a>
            <a href={`https://etherscan.io/address/${params.contract_address}`} target='_blank' rel='noreferrer'>
              <p>{`${params.contract_address.slice(0, 5)}...${params.contract_address.slice(-5)}`}</p>
            </a>
          </div>
        </div>
        <div className="collection_social_links">
          <div className="external_url social_logo">
            <a href={collectionDetail?.collection.meta?.external_url}>
              <i className="fa-solid fa-globe"></i>
            </a>
          </div>
          <div className="twitter social_logo">
            <a href={`https://twitter.com/${collectionDetail?.collection.meta?.twitter_username}`}>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="discord social_logo">
            <a href={collectionDetail?.collection.meta?.discord_url}>
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
          <div className="instagram social_logo">
            <a href={collectionDetail?.collection.meta?.instagram}>
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="collection_description">
        <p>{collectionDetail?.collection.description}</p>
      </div>

    </div>
  )
}

export default CollectionDetails;
