import React, { useContext, useState } from "react"


const Authcontext=React.createContext()
export default function Auth(props) {
    const[user,setUser]=useState(null)
   const Login=(user)=>{
    setUser(user)
   }
   const Logout=()=>{
    setUser(null)
   }
  return (
    <div>
         <Authcontext.Provider value={{user,Login, Logout}}>
                {props.children}
            </Authcontext.Provider>
    </div>
  )
}
export function useAuth(){
    return useContext(Authcontext)
}