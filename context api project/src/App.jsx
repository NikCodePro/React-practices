import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextPorvider from "./context/userContextPorvider"

const App = () => {
  return (
    <UserContextPorvider>
      <h1>thid id react app</h1>
      <Login />
      <Profile />
    </UserContextPorvider>
  )
}

export default App