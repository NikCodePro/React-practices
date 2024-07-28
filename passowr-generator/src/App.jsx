import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const copyPassword = useCallback(() => {
    passRef.current.style.backgroundColor = "skyblue"
    window.navigator.clipboard.writeText(password)
  }, [password])

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i <= length; i++) {
      let a = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(a)
    }
    setPassword(pass)

  }, [length, number, char, setPassword])

  useEffect(() => {
    generatePassword()
    passRef.current.style.backgroundColor = "blue"
  }, [length, number, char, generatePassword])


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg bg-gray-700 rounded-lg px-4 my-8 text-orange-500 text-center">
        <div className="flex shadow-lg rounded-md overflow-hidden mb-4">
          <input readOnly type="text" placeholder="password" value={password} className="w-4/5 m-2 py-3 rounded-md text-black bg-white" />
          <button ref={passRef} onClick={copyPassword} className="bg-blue-700 text-orange-800 p-1 m-3 border rounded-md border-blue-950">Copy</button>
        </div >
        <div className="text-sm flex gap-x-2">
          <input type="range" className="cursor-pointer m-1 px-5" value={length} min={6} max={20} onChange={(e) => { setLength(e.target.value) }} />
          <label className="text-sm m-2">Length: {length}</label>
          <input type="checkbox" defaultChecked={number} onChange={() => { setNumber((e) => !e) }} id="numberInput" />
          <label htmlFor="numberInput">Numbers</label>
          <input type="checkbox" defaultChecked={char} onChange={() => { setChar((e) => !e) }} id="charInput" />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App