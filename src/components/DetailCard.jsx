import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaMapMarkedAlt } from 'react-icons/fa'

function DetailCard({data}) {  
  const {contin} = useParams()

  return (
    <div className='detailCon'>
      <div className='detail'>
        <hr />
        <img src={`${data.flags.png}`} alt="" />
        <h3><b>Official Name: </b>{data.name.official}</h3>
        <h4><b>Common Name: </b>{data.name.common}</h4>
        <p>{data.unMember ? "A member of United Nations" : "Not a member of United Nations"}</p>
        <p><b>Region: </b>{data.region}</p>
        <p><b>Subregion: </b>{data.capital}</p>
        <p><b>Population: </b>{data.population}</p>
        <Link target='_blank' className='map' to={`${data.maps.googleMaps}`}>
          <FaMapMarkedAlt />
        </Link>
        {
          data.borders.length >= 1 ? 
          <div className='borders'>
            <h3>Borders</h3>
            <ul>
              {data.borders.map(itm => {
                return <li><Link to={`/${contin}/${itm}`}>{itm}</Link></li>
              })}
            </ul>
          </div> : <div>There are no borders.</div>
        }
        <hr />
      </div>
    </div>
  )
}

export default DetailCard