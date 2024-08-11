import { useDispatch, useSelector } from 'react-redux'
import Navbar from './components/Navbar'
import './App.css'
import { decrement, increment } from './Redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        the counter is {count}
        <button onClick={() => { dispatch(increment()) }}>+</button>
      </div>
    </>
  )
}

export default App
