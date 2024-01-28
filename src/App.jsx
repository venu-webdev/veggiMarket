import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './pages/Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-3 justify-start items-center w-[80vw] m-auto'>
      <Navbar/>
      <hr className='h-[1px] border-[1px] w-full'/>
      <Content/>
    </div>
  )
}

export default App
