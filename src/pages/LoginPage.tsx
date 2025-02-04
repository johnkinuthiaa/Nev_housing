import "./Login.css"
import { FcGoogle } from "react-icons/fc";
const LoginPage =()=>{
    return(
        <div className={"w-[100%] h-[100%] login__container"}>

            {/*<img src={"/src/assets/login.webp"} className={"-ml-20"}/>*/}
            <img src={"https://i.pinimg.com/236x/56/8e/a8/568ea8bc5b2b7661714f0e3b8697e300.jpg"} className={""}/>
            <div>
                <p>Welcome back!</p>
                <p>Please enter your details</p>
                <form>
                    <input type={"email"} placeholder={"Email"}/>
                    <input type={"password"} placeholder={"Password"}/>
                    <div>forgot password</div>
                    <button>Login</button>
                    <button className={"flex items-center justify-center"}><FcGoogle /> Log in with Google</button>
                </form>
                <p>Dont have an account? Sign up</p>
            </div>
        </div>
    )
}
export default LoginPage