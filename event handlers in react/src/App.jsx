import { useState } from 'react'
import './App.css'

function App() {
  const [bg, setBg] = useState("none")
  // const [name, setName] = useState("Nikhil")
  const [form, setForm] = useState({ name: "", phone: "" })

  const handleClick = () => {
    alert("Button Clicked")
  }

  const handleDiv = () => {
    setBg("green")
  }

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>

      <div onMouseOver={handleDiv} className="container" style={{ backgroundColor: bg }}> Lorem ipsum dolor sit.</div>

      <input type="text" name="name" value={form.name} onChange={handleInput} />
      <br />
      <input type="phone" name="phone" value={form.phone} onChange={handleInput} />
    </>
  )
}

export default App
