import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(15)

  const addvalue = () => {
    if (count < 20) {
  
      setCount(count + 1)
    }

  }

  const removevalue = () => {
    if (count > 0){

      setCount(count - 1)
    }
  }
  

  return (
    <>
      <h1>hello i am creating counter project</h1>
      <p>count is {count}</p>
      <button onClick={addvalue}>increment</button>
      <br />
      <button onClick={removevalue}>decrement</button>

    </>
  )
}

export default App
