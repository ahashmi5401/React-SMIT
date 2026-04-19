import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const PublicRoute = ({children}) => {
    const [user] = useContext(AuthContext)
    
     if(user) return <Navigate to="/" />

    console.log("janii")
    return children
}

export default PublicRoute