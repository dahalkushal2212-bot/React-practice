import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className='w-full h-screen '
    style = {{backgroundColor : color}}
    >
      <div className='fixed flex flex-wrap  justify-center  bottom-12 inset-x-0 px-4' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-4xl'>
        <button onClick={() => setcolor("red")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"red"}}>Red</button>
        <button onClick={() => setcolor("green")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"green"}}>Green</button>
        <button onClick={() => setcolor("yellow")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={() => setcolor("blue")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={() => setcolor("olive")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"olive"}}>Olive</button>
        <button onClick={() => setcolor("purple")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"purple"}}>Purple</button>
        <button onClick={() => setcolor("teal")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"teal"}}>Teal</button>
        <button onClick={() => setcolor("pink")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={() => setcolor("brown")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"brown"}}>Brown</button>
        <button onClick={() => setcolor("gray")} className='outline-none px-4 py-2 rounded-3xl' style={{backgroundColor:"gray"}}>Gray</button>
        

      </div>
      </div>
    </div>
  )
}

export default App
