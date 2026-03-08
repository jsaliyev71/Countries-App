import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from '../../node_modules/axios'
import { useNavigate } from 'react-router-dom';

export const Context = createContext();

function ContextProvider({children}) {

  
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  useEffect(() => {
    axios('https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population,languages,borders,maps,unMember,cca3')
    .then(res => {
      // the setTimeout is only here to see the loading...
      setTimeout(() => {
        setData(res.data);
        setLoading(false);
      }, 2000);
    })
      .catch(err => console.log(err.message))
  }, [])

  const category = data ? [...new Set(data.map((itm) => itm.region))] : []

  const value = {
    data,
    setData,
    loading,
    category,
    navigate,
  };



  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider