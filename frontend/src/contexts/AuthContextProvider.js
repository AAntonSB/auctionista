import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null)

  const fetchUser = async () => {
    let res = await fetch('/auth/whoami')
    //let text = await res.text()
    //console.log("response :" + text)
    try {
      let text = await res.text()
      //res = await res.json()
      //console.log(text);
      if (text !== "no such user"){
        setUser(text)
        console.log(text);
        console.log(user)
      } else {
        console.log('Not authenticated')
      }
      //setUser(text)
      //console.log(text);
    } catch {
      console.log('Not authenticated');
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const values = {
    user,
    fetchUser,
    setUser
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}