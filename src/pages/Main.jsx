import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import FlagCard from '../components/FlagCard';


function Main() {
  const {data} = useContext(Context);

  return (
    <div className='countries'>
      {data ? data.map(itm => {
          return <FlagCard key={itm.name.common} data={itm} />
        }) : false      
      }
    </div>
  )
}

export default Main