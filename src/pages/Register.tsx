import {useState} from "react";
import {useNavigate} from "react-router";
import {FcGoogle} from "react-icons/fc";
import Loading from "../components/Loading.tsx";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register =()=>{
    const REGISTRATION_URL ="http://localhost:8080/api/v1/users/register"
    const[email,setEmail] =useState<string>("")
    const[username,setUsername] =useState<string>("")
    const[password,setPassword] =useState<string>("")
    const[loading,setLoading] =useState<boolean>(false)
    const[showPassword,setShowPassword] =useState<boolean>(false)
    const navigate =useNavigate()

    const register =(async ()=>{
        setLoading(true)
        const response =await fetch(REGISTRATION_URL,{
            method:"POST",
            body:JSON.stringify({
                username:username,
                userEmail:email,
                password:password,
                role:"USER"
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                setLoading(false)
                navigate("/")

            }else{
                console.log("error registering!")
            }
        }
    })
    return(
        <div className={"w-full h-full login__container mt-10  flex justify-center bg-[whitesmoke]"}>

            {/*<img src={"/src/assets/login.webp"} className={"-ml-20"}/>*/}
            <img src={"https://i.pinimg.com/236x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"} className={"w-[500px] h-[600px] rounded-2xl"}/>
            <div className={"flex flex-col gap-4 shadow-2xl bg-white p-5 ml-10 rounded-2xl w-[500px]"}>
                <div className={"flex text-center flex-col gap-5"}>
                    <p className={"font-bold text-3xl"}>Create A New Account </p>
                    <p className={"text-gray-600"}>Please enter your details</p>
                </div>
                <form className={"gap-5 flex flex-col  "} onSubmit={(e)=>{
                    e.preventDefault()
                    register()
                }}>
                    <input type={"text"} placeholder={"Username"} className={"border-b-2 border-b-gray-500 active:outline-0"} required={true} onChange={(e)=>{
                        setUsername(e.target.value)
                    }}/>
                    <input type={"email"} placeholder={"Email"} className={"border-b-2 border-b-gray-500 active:outline-0"} required={true} onChange={(e)=>{
                        setEmail(e.target.value)
                    }}/>
                    <div className={"flex"}>
                        <input type={showPassword?"text":"password"} placeholder={"Password"} className={"border-b-2 border-b-gray-500 active:outline-0 w-full"} required={true} onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <button className={" outline-0 -ml-4"} type={"button"} onClick={()=>setShowPassword(!showPassword)}>{showPassword?<VisibilityIcon/>:<VisibilityOffIcon/>} </button>
                    </div>
                    <div className={"flex justify-end text-gray-600"}>forgot password?</div>
                    <button className={"flex items-center justify-center rounded-2xl bg-black p-2 text-white w-full font-bold"} type={"submit"}>{loading?<Loading/>:"Register"}</button>
                    <button className={"flex items-center justify-center rounded-2xl bg-[whitesmoke] p-2 text-black w-full font-bold"} type={"button"}><FcGoogle /> Sign in with Google</button>
                </form>
                <p>Already have an account? <span><a href={"/login"} className={"underline visited:text-purple-800 text-blue-700"}>Login</a></span></p>
            </div>
        </div>
    )
}
export default Register