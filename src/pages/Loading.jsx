import React from 'react'
import { FaSpinner } from 'react-icons/fa'

function Loading() {

  console.log("Hello I am loading.")
  return (
    <div className='loading'>
        <FaSpinner className='spinner'/>   
        <span>Loading</span>
    </div>
  )
}

export default Loading