import React, { useState } from 'react'

export default function Card({item}) {
    const [count, setCount] = useState(1);

  return (
    <div className='border-[1px] border-gray-300 w-[300px] h-[520px] rounded-[10px] drop-shadow-md' id={item.id}>
        <img src={item.imgUrl} className='w-[100%] h-[220px] rounded-[10px] rounded-b-none hover:scale-105 transition duration-500 cursor-pointer object-cover' alt={item.vegetable} />
        <div className='px-4 py-4'>
        <div className='flex align-bottom items-baseline gap-2'><h2 className='text-3xl font-semibold'>{item.vegetable}</h2><p className='text-gray-600'>({item.commonNames})</p></div>
        <p className='text-xs text-gray-600'>{item.description}</p>
        <h3>⭐{item.rating}</h3>
        <h2 className='text-5xl font-semibold text-green-600'>{item.price}</h2>
        <div className='flex justify-start items-center gap-2'>
            <p>Quantity(kgs): </p>
            <div className='flex items-center'>
                
                <input type="number" readOnly className='mx-2 border-[1px] border-gray-300 rounded-md shadow-none text-center p-1 w-[40px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' value={count}/>
                <div className='flex flex-col gap-[5px]'>
                <button className='bg-green-400 rounded-md w-[30px] h-[20px] flex justify-center items-center' onClick={()=>{
                    setCount(c=>c+1)
                }}>+</button>
                <button className='bg-gray-300 rounded-md w-[30px] h-[20px] flex justify-center items-center' onClick={()=>{
                    if(count !=0){
                        setCount(c=>c-1)
                    }
                }}>-</button>
                </div>
            </div>
        </div>
        <button className='w-[100%] bg-blue-500 text-white font-semibold text-xl rounded-md h-[40px] my-[20px] hover:bg-blue-600'>Add to Cart</button>
        </div>
    </div>
  )
}
