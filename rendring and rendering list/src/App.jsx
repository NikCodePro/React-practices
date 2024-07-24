import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [showBtn, setshowBtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "Hey",
      desc: "I am a good todo"
    },
    {
      title: "Hey Another todo",
      desc: "I am a good todo too"
    },
    {
      title: "Hey I am grocery todo",
      desc: "I am a good todo but I am grocery todo"
    },

  ])

  const Todo = ({ todo }) => {
    return (
      <div className='m-20 border border-1 border-green-400'>
        <div className="todo">{todo.title}</div>
        <div className="todo">{todo.desc}</div>
      </div>)
  }


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {showBtn ? <button>show btn is True</button> : <button>show btn is False</button>}
        {showBtn && <button>show btn is True</button>}
        <button onClick={() => setshowBtn(!showBtn)}>
          count is count
        </button>
        {todos.map(todo => {
          return <Todo key={todo.title} todo={todo} />
          // return (<div key={todo.title}>
          // <div className="todo">{todo.title}</div>
          // <div className="todo">{todo.desc}</div>
          // </div>)
        })}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
