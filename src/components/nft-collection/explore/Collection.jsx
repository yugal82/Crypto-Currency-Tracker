import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../../Context/ContextProvider';
import CollectionCard from '../CollectionCard';

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
    // console.log(data);
    return data.data;
  }

  const handleOnChange = async (e) => {
    const value = e.target.value;
    // console.log(value);
    setInputVal(value);
    const filterCollections = await getCollectionsBySearch(value);
    console.log(filterCollections);
    setSearchedCollections(filterCollections);
  }

  useEffect(() => {
    fetchCollections();
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
            placeholder='Search for you favorite crypto...'
            defaultValue={inputVal}
            onChange={handleOnChange}
          />
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>
      </div>
      <div className='collection_container'>
        {
          searchedCollections ? (
            searchedCollections?.map((collection) => (
              <CollectionCard collection={collection} />
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
