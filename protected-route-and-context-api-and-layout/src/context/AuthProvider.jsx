import React, { createContext, useState } from 'react'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
   const isUser = JSON.parse(localStorage.getItem("isUser"))
   const [user, setUser] = useState(isUser || null)

   const loginHandler = () => {
    if(!user) return

    localStorage.setItem('isUser' , JSON.stringify(true))
    setUser(true)
   }
  return (
    <AuthContext.Provider value={[user , loginHandler]}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider