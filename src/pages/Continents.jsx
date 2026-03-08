import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import { useParams } from 'react-router-dom';
import FlagCard from '../components/FlagCard';

function Continents() {
  const {data} = useContext(Context);
  const {contin} = useParams();

  return (
    <div className='countries'>
      {data ? data
        .filter(itm => itm.region == contin)
        .map(itm => {
            return <FlagCard key={itm.name.common} data={itm} />
        }) : false}
    </div>
  )
}

export default Continents