import React from 'react'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-8 w-[80vw]'>
      <div className=' flex justify-center items-center text-3xl font-semibold text-center py-4 text-green-700 gap-2'>
      <div className='border-[1px] border-gray-700 rounded-md mt-1'>
      <div className='bg-green-500 w-4 h-4 rounded-md m-[4px]'></div>
      </div>
      <div>VeggiMarket</div>
    </div>
    <div className='flex gap-8'>
      <a href="#" className='text-xl text-green-700'>Home</a>
      <a href="#" className='text-xl text-gray-700 hover:text-green-700'>Shopping Cart</a>
      <a href="#" className='text-xl text-gray-700 hover:text-green-700'>Contact</a>
    </div>
    </div>
  )
}
