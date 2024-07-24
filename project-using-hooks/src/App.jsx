import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const btnRef = useRef()
  const btnRef2 = useRef()

  const addCount = () => {
    setCount(count + 1)
    console.log(count, "updated")
  }

  useEffect(() => {
    console.log("first rendering", btnRef, btnRef2)
    btnRef.current.style.backgroundColor = 'red'
    btnRef2.current.style.backgroundColor = 'blue'
  })


  return (
    <>
      <h1>Counter is {count}</h1>
      <h2>Click The Counter</h2>
      <button ref={btnRef} onClick={addCount}>Add</button>
      <br />
      <br />
      <button ref={btnRef2} onClick={() => { (count > 0) ? setCount(count - 1) : setCount(count); }}>Remove</button>
    </>
  )
}

export default App
