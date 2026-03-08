import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import { useParams } from 'react-router-dom';
import DetailCard from '../components/DetailCard';

function Country() {
  const {data} = useContext(Context);
  const {id} = useParams();

  return (
    <div>
      {data ? data
        .filter(itm => itm.cca3 == id)
        .map(itm => {
            return <DetailCard key={itm.cca3} data={itm}/>
        }) : false}
    </div>
  )
}

export default Country
