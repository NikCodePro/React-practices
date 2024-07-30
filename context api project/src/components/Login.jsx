import { useState, useContext } from "react"
import UserContext from "../context/UserContext"


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setData} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setData({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input value={username} onChange={(e)=> setUsername(e.target.value)} type="text" name="" placeholder="Username" id="" />
            <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" name="" placeholder="Password" id="" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login