import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      {/* <button className='outline-none px-4 rounded-full text-white shadow-lg'style={{backgroundColor: red}}>Red</button> */}
      <button onClick={() => setColor('red')}
      className='outline-none px-4 rounded-full text-white shadow-lg bg-red-500'>red</button>
      <button onClick={() => setColor('green')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-green-700'>green</button>
      <button onClick={() => setColor('blue')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
      <button onClick={() => setColor('purple')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-purple-300'>lavender</button>
      <button onClick={() => setColor('olive')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-green-300'>olive</button>
      <button onClick={() => setColor('gray')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-gray-500'>gray</button>
      <button onClick={() => setColor('blue')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
      <button onClick={() => setColor('blue')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
      <button onClick={() => setColor('blue')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
      <button onClick={() => setColor('blue')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
      <button onClick={() => setColor('blue')} 
      className='outline-none px-4 rounded-full text-white shadow-lg bg-blue-500'>blue</button>
      </div>
    </div>
    </div>
    
  )
}

export default App
