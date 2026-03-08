import React from 'react'
import CountUp from 'react-countup'
import { useNavigate } from 'react-router-dom'

function FlagCard({data}) {
  const navigate = useNavigate()

  return (
    <div className='cardCon' onClick={() => navigate(`${data.cca3}`)}>
      <div className='card'>
        <img src={data.flags.png} alt="" />
        <h3>{data.name.common}</h3>
        <p>Population: <CountUp end={data.population} duration={2} /></p>
      </div>
    </div>
  )
}

export default FlagCard