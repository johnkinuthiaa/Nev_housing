import "./styles/Login.css"
import { FcGoogle } from "react-icons/fc";
import {useContext, useState} from "react";
import {useNavigate} from "react-router";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {AuthContext} from "../context/AuthContext.tsx";
const LoginPage =()=>{

    const{loginContext,setUser,setUsernameContext, passwordContext, setPasswordContext, emailContext, setEmailContext}=useContext(AuthContext)

    const LOGIN_URL =import.meta.env.VITE_BACKEND_BASE_URL+"/api/v1/users/login"
    const[email,setEmail] =useState<string>("")
    const[password,setPassword] =useState<string>("")
    const[jwt,setJwt] =useState<string>("")
    const[showPassword,setShowPassword] =useState<boolean>(false)

    const navigate =useNavigate()

    const login =(async ()=>{
        const response =await fetch(LOGIN_URL,{
            method:"POST",
            body:JSON.stringify({
                userEmail:email,
                password:password
            }),
            headers:{
                "Content-Type":"application/json",
                "ngrok-skip-browser-warning": "69420",
            }
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                setJwt(data?.jwtToken)
                setUsernameContext(data?.user.username)
                setUser(data?.user)
                console.log(data?.user.username)
                loginContext()
                navigate("/")
                localStorage.setItem("jwtToken",jwt)
            }else{
                console.log("error logging you in")
            }
        }
    })
    return(
        <div className={"bg-[whitesmoke]"}>
            <div className={"w-full h-full login__container mt-10  flex justify-center "}>

                {/*<img src={"/src/assets/login.webp"} className={"-ml-20"}/>*/}
                <img src={"https://i.pinimg.com/236x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"} className={"login__image w-[500px] h-[600px] rounded-2xl"}/>
                <div className={"login__form__holder flex flex-col gap-4 shadow-2xl bg-white p-5 ml-10 rounded-2xl w-[500px]"}>
                    <div className={"flex text-center flex-col gap-5"}>
                        <p className={"font-bold text-3xl "}>Welcome back!</p>
                        <p className={"text-gray-600"}>Please enter your details</p>
                    </div>
                    <form className={"gap-5 flex flex-col  "} onSubmit={(e)=>{
                        e.preventDefault()
                        login()
                    }}>
                        <div className={"flex "}>
                            <input type={"email"} placeholder={"Email"} className={"border-b-2 border-b-gray-500 active:outline-0 w-full ml-2"} required={true} value={emailContext} onChange={(e)=>{
                                setEmail(e.target.value)
                                setEmailContext(e.target.value)
                            }}/>
                        </div>
                        <div className={"flex"}>
                            <input type={showPassword?"text":"password"} placeholder={"Password"} value={passwordContext} className={"border-b-2 border-b-gray-500 active:outline-0 w-full"} required={true} onChange={(e)=>{
                                setPassword(e.target.value)
                                setPasswordContext(e.target.value)
                            }}/>
                            <button className={" outline-0 -ml-4"} type={"button"} onClick={()=>setShowPassword(!showPassword)}>{showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>} </button>
                        </div>
                        <div className={"flex justify-end text-gray-600"}>forgot password?</div>
                        <button className={"flex items-center justify-center rounded-2xl bg-black p-2 text-white w-full font-bold"} type={"submit"}>Login</button>
                        <div className={"flex justify-center"}>or</div>
                        <button className={"flex items-center justify-center rounded-2xl bg-[whitesmoke] p-2 text-black w-full font-bold"} type={"button"}><FcGoogle /> Log in with Google</button>
                    </form>
                    <p>Dont have an account? <span><a href={"register"} className={"underline visited:text-purple-800 text-blue-700"}>Sign up</a></span></p>
                </div>
            </div>

        </div>
    )
}
export default LoginPage