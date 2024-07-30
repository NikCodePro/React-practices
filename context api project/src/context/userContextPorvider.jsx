import React from 'react'
import UserContext from './UserContext.js'

const UserContextPorvider = ({ children }) => {
  const [data, setData] = React.useState(null)
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextPorvider