import { useState, useEffect } from 'react'
import { Navbar } from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(0)


  useEffect(() => {
    alert("first alert")
  }, [])

  useEffect(() => {
    alert("count was changed to " + count)
  }, [count])


  return (
    <>
      <Navbar color={"sky Blue " + color} />
      <div>
        <h1>The Count is {count}</h1>
        <button onClick={() => { setCount(count + 1), setColor(color + 1) }}>Click Me</button>
      </div>
    </>
  )
}

export default App
