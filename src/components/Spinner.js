// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import Loading from './Loading.gif'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={Loading} alt="Loading" />        
      </div>
    )
}

export default Spinner