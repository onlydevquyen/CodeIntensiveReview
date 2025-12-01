import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Bio = () => {
    const { user } = useContext(UserContext)
  return (
    <div>
      {user.bio} (Copy)
    </div>
  )
}

export default Bio
