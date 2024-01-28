import React from 'react'
import Cards from '../components/Cards';


export default function Content() {
  return (
    <div className='flex flex-col justify-center items-center w-[70vw]'>

        <div className='px-4 py-2 flex gap-4 mb-4'>
            <h2 className='text-4xl text-blue-800 font-semibold '>Available Products</h2>
            <h4 className='px-4 py-2 border-[1px] bg-green-600 text-white rounded-md'>Fresh and Healthy Veggies😋🍀</h4>
        </div>
        <Cards className="w-[80vw]"></Cards>
    </div>
  )
}
