import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CollectionDetails = () => {
  const params = useParams()

  const [collectionDetail, setCollectionDetail] = useState();

  const getAssetsForAddress = async () => {
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.BLOCK_DAEMON_API}`
      }
    }
    const url = `https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/assets?contract_address=${params.contract_address}`
    const res = await fetch(url,options);
    const data = await res.json();
    setCollectionDetail(data);
    console.log(data);
  }

  useEffect(() => {
    getAssetsForAddress();
  }, [])


  return (
    <div>Single Collection details</div>
  )
}

export default CollectionDetails;
