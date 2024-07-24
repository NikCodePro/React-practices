// import React from 'react'

import { useEffect } from "react"

export const Navbar = (props) => {
  
  useEffect(() => {
    alert('color is changed to ' + props.color)
  }, [props.color])

  return (
    <div>I am a Navbar of {props.color} color.</div>
  )
}
