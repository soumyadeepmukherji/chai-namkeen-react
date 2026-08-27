import { useContext, useState } from "react"
import {useForm} from 'react-hook-form'
import AuthContext from "../context/AuthContext"

const AuthPage = () => {
    const[mode, setMode] = useState('Signup')
    const{ signUp, user, logOut, logIn } = useContext(AuthContext)
    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    function onSubmit(data){
        alert('form Submited Successfully')
        if(mode === "signup"){
            signUp(data.email,data.password)
        }else{
            logIn(data.email,data.password)
        }
        
    }
    return(
        <>
        <h1>Authetication Page</h1>
        {user && <p>user logged in : {user.email}</p>}
        <button onClick={() => logOut()}>Logout</button>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register('email',{required :"Email is required"})} />
            {errors.email && (<span>{errors.email.message}</span>)}

            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password',{required: "Password is required",minLength:{value:6,message:"Password mush have minimum 6 char"} ,maxLength:{value:10,message:"Password mush have maximum 10 char"}})} />
            {errors.password && (<span>{errors.password.message}</span>)}

            <button>{mode === 'Signup' ? 'Signup' : 'Login'}</button>
        </form>
        </>
    )
}

export default AuthPage