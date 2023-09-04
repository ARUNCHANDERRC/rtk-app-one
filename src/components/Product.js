import React from 'react'

const Product = (props) => {
  return (
    <div className='flex flex-row items-center gap-8 px-6 py-4 mx-11 border-2 border-indigo-200'>
      <img src={props.image} alt={props.name+"glasses"} width='80px' className='rounded-full'/>
      <div className='w-1/2 px-10'>
        <p className='text-xl font-medium'>{props.name}</p>
        <p className='text-lg'>{props.price.toFixed(2)}</p>
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-lg font-medium'>Amount</p>
        <p>{props.amount}</p>
      </div>
    </div>
  )
}

export default Product
