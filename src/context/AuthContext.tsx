import {createContext, useState} from "react"
import {useNavigate} from "react-router";
export const AuthContext =createContext(null);

export const AuthProvider =({children})=>{
    const[user,setUser] =useState(null)
    const[usernameContext,setUsernameContext] =useState("")
    const[passwordContext,setPasswordContext] =useState("")
    const[emailContext,setEmailContext] =useState("")

    const loginContext =()=>{

    }
    const isAuthenticated =()=>{
        if(emailContext ===null){
            return true
        }else return false
    }

    return(
        <AuthContext.Provider value={{
            isAuthenticated,
            loginContext,
            user,setUser,usernameContext, setUsernameContext, passwordContext, setPasswordContext, emailContext, setEmailContext}}>
            {children}
        </AuthContext.Provider>)
}