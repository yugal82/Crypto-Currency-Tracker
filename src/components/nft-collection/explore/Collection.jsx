import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../../Context/ContextProvider';
import CollectionCard from '../CollectionCard';

const Collection = () => {

  const { getAllNFTCollection } = useContext(context);

  const [allCollections, setAllCollections] = useState([]);

  const fetchCollections = async () => {
    const collections = await getAllNFTCollection();
    setAllCollections(collections.results);
  }

  useEffect(() => {
    fetchCollections();
  }, [])


  return (
    <div className='container-fluid'>
      <div className='collection_header'>
        <h2>Explore Collections</h2>
      </div>
      <div className='collection_container'>
        {
          allCollections?.map((collection) => (
            <CollectionCard key={collection.key} collection={collection} />
          ))
        }
      </div>
    </div>
  )
}

export default Collection;
