import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../../Context/ContextProvider';
import CollectionCard from '../CollectionCard';
import CollectionCardFilter from '../CollectionCardFilter';

const Collection = () => {

  const { getAllNFTCollection } = useContext(context);

  const [allCollections, setAllCollections] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [searchedCollections, setSearchedCollections] = useState();

  const fetchCollections = async () => {
    const collections = await getAllNFTCollection();
    setAllCollections(collections.results);
  }

  const getCollectionsBySearch = async (query) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer Ok-kPy1Xuy04MIozGNgbYUgN1brBgOgIDRGC1xAYZDwdSOBA"
      }
    }
    const url = `https://svc.blockdaemon.com/nft/v1/ethereum/mainnet/collections/search?name=${query}`;
    const res = await fetch(url, options);
    const data = await res.json();
    return data.data;
  }

  const filterSearchedCollections = (collections) => {
    const filteredCollections = collections.filter((collection) => {
      if (collection?.logo) return collection;
    })
    setSearchedCollections(filteredCollections);
  }

  const handleOnChange = async (e) => {
    const value = e.target.value;
    setInputVal(value);
    const searchResult = await getCollectionsBySearch(value);
    filterSearchedCollections(searchResult);
  }

  useEffect(() => {
    fetchCollections();
    // eslint-disable-next-line
  }, [])


  return (
    <div className='container-fluid'>
      <div className='collection_header'>
        <h2>Explore Collections</h2>
      </div>
      <div className='collection_search'>
        <div className="search-box">
          <input
            type="text"
            placeholder='Search NFT Collection here...'
            defaultValue={inputVal}
            onChange={handleOnChange}
          />
        </div>
      </div>
      <div className='collection_container'>
        {
          inputVal !== '' ? (
            searchedCollections?.map((collection) => (
              <CollectionCardFilter collection={collection} />
            ))
          ) : (
            allCollections?.map((collection) => (
              <CollectionCard key={collection.key} collection={collection} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Collection;
