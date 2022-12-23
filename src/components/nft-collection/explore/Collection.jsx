import React, { useContext } from 'react'
import { context } from '../../../Context/ContextProvider';
import CollectionCard from '../CollectionCard';

const Collection = () => {

  const { allCollections } = useContext(context);

  return (
    <div className='container-fluid'>
      <div className='collection_header'>
        <h2>Explore Collections</h2>
      </div>
      <div className='collection_container'>
        {
          allCollections.results?.map((collection) => (
            <CollectionCard key={collection.key} collection={collection} />
          ))
        }
      </div>
    </div>
  )
}

export default Collection;
