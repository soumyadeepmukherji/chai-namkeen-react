import { useState } from "react"
import AuthContext from "./AuthContext"


const AuthContextProvider = ({children}) =>{
    let currentUser = localStorage.getItem('currentUser')
    const[user, setUser] = useState(currentUser ? {email: currentUser} : null)

    function signUp(email,password){
        const users = JSON.parse(localStorage.getItem('users') || "[]")

        if(users.find((u) => u.email === email)){
            return {success: false, error: "Email already Exist"};
        }

        const newUser = {email,password}
        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem('currentUser', email)

        setUser({email})

        return {success: true}
    }

    function logIn(email,password){
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        const user = users.find((u) => u.email=== email && u.password === password)

        if(!user){
            return { success: false, error:"Invalid User" }
        }

        localStorage.setItem('currentUser', email)
        setUser({email})

         return {success: true}
    }

    function logOut(){
        localStorage.removeItem('currentUser')
        setUser(null)
    }
    return(
        <AuthContext.Provider value={{signUp, user, logOut, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export  default AuthContextProvider