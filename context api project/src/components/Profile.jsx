import UserContext from "../context/UserContext"
import { useContext } from "react"

const Profile = () => {

  const {data} = useContext(UserContext)

  if (!data) return <div> please Login</div>

  return (
    <div>{data.username}</div>
  )
}

export default Profile