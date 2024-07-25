import { useState } from 'react'

function App() {

  const [color, setColor] = useState("#e7e3e3")


  return (
    <>
      <div className="container h-screen w-screen" style={{ backgroundColor: color }}>
        <div className="flex-auto justify-center flex space-x-4 fixed bottom-20 w-full">
          <button onClick={() => setColor("grey")} className="h-10 px-6 font-semibold rounded-md bg-slate-400 text-white" type="submit">
            Grey
          </button>
          <button onClick={() => setColor("green")} className="h-10 px-6 font-semibold rounded-md bg-green-400 text-white" type="submit">
            green
          </button>
          <button onClick={() => setColor("blue")} className="h-10 px-6 font-semibold rounded-md bg-blue-400 text-white" type="submit">
            blue
          </button>
          <button onClick={() => setColor("pink")} className="h-10 px-6 font-semibold rounded-md bg-red-200 text-white" type="submit">
            pink
          </button>
          <button onClick={() => setColor("yellow")} className="h-10 px-6 font-semibold rounded-md bg-yellow-300 text-white" type="submit">
            yellow
          </button>
          <button onClick={() => setColor("violet")} className="h-10 px-6 font-semibold rounded-md bg-violet-600 text-white" type="submit">
            violet
          </button>
          <button onClick={() => setColor("indigo")} className="h-10 px-6 font-semibold rounded-md bg-indigo-600 text-white" type="submit">
            indigo
          </button>
        </div>
      </div>
    </>
  )
}

export default App
