// import React from "react"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { Card } from "./components/Card"
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card title='card 1' descripton='descriptokmkfdosdfp 1' />
        <Card title='card 2' descripton='descriptokmkfdosdfp 2' />
        <Card title='card 3' descripton='descriptokmkfdosdfp 3' />
        <Card title='card 4' descripton='descriptokmkfdosdfp 4' />
        <Card title='card 5' descripton='descriptokmkfdosdfp 5' />
      </div>
      <Footer />
    </>
  )
}

export default App