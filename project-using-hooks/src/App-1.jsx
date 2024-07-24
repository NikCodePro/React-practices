import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const a = useRef(0)

  const addCount = () => {
    setCount(count + 1)
    console.log(count, "updated")
  }

  useEffect(() => {
    a.current = a.current + 1
    console.log(`rerendering....  value of a is ${a.current}`)
  })


  return (
    <>
      <h1>Counter is {count}</h1>
      <h2>CLick The Counter</h2>
      <button onClick={addCount}>Add</button>
      <br />
      <br />
      <button onClick={() => { (count > 0) ? setCount(count - 1) : setCount(count); }}>Remove</button>
    </>
  )
}

export default App
