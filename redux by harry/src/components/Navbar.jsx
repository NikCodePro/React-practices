import { useSelector } from 'react-redux'


const Navbar = () => {
  const count = useSelector((state) => state.counter.value)
  return (
    <div>Navbar and this is counter {count}</div>
  )
}

export default Navbar