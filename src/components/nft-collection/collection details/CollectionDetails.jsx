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
        authorization: 'Bearer Ok-kPy1Xuy04MIozGNgbYUgN1brBgOgIDRGC1xAYZDwdSOBA'
      }
    }
    const url = `https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/assets?contract_address=${params.contract_address}`
    const res = await fetch(url,options);
    const data = await res.json();
    setCollectionDetail(data);
    console.log(data);
  }

  // const getAssetsForAddress = async () => {
  //   const options = {
  //     method: 'GET',
  //     headers: { accept: 'application/json', 'X-API-KEY': '8SXGNzbNnvbo3QnkWXDVYiYQLXGcDl24' }
  //   };

  //   const url = `'https://api.blockspan.com/v1/collections/contract/0x41f56b000fffe17943fb4c182c123767af71d005?chain=eth-main`
  //   const res = await fetch(url, options);
  //   const data = await res.json();
  //   console.log(data);
  // }

  useEffect(() => {
    getAssetsForAddress();
  }, [])


  return (
    <div>Single Collection details</div>
  )
}

export default CollectionDetails;
