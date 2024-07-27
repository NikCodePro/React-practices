import { Navbar } from './components/Navbar'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import User from './components/User'

function App() {

  let router = createBrowserRouter([
    {
      path: '/',
      element: <>
        <Navbar /> <Home /></>
    },
    {
      path: '/about',
      element: <>
        <Navbar /> <About /></>
    },
    {
      path: '/services',
      element: <>
        <Navbar /><Services /></>
    },
    {
      path: '/user/:username',
      element: <>
        <Navbar /><User /></>
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
