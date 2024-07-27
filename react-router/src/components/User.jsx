import { useParams } from "react-router-dom"
const User = () => {

    const params = useParams()

  return (
    <div>Hello im user / {params.username}</div>
  )
}

export default User