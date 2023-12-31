import React from 'react'
import { useSelector } from 'react-redux'
import store from '../redux/store'

const Navbar = () => {
    const amount = useSelector((store)=>store.basket.amount)
  return (
    <div className='flex flex-row justify-evenly  pt-4 bg-teal-600 text-white  text-lg font-medium'>
      <p>Home</p>
      <p>Basket
        <span className='text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1'>{amount}</span>
      </p>
    </div>
  )
}

export default Navbar
