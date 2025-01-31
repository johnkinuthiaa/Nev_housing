import { NavigateFunction, useNavigate} from "react-router";
import {CgProfile} from "react-icons/cg";

const Headers =()=>{
    const navigate:NavigateFunction =useNavigate();
    return(
        <header className={"flex justify-between p-9  shadow-2xl w-full items-center "}>
            <h1 className={"text-[#ff914d]"}>Nevani <span className={"text-[#5271ff] border-l-2 border-red-500"}>Housing</span></h1>
            <div className={"rounded-full bg-white text-black flex gap-7 justify-between font-bold cursor-pointer"}>
                <p onClick={()=>navigate("/")}>Home</p>
                <p onClick={()=>navigate("/properties")}>Properties</p>
                <p>Service</p>
                <p onClick={()=>navigate("/about")}>About</p>
                <p onClick={()=>navigate("/contact")}>Contact</p>
                <p onClick={()=>navigate("/faqs")}>Faqs</p>
            </div>
            <div>
                <button className={"flex content-center align-middle text-2xl"}>Sign up <CgProfile /></button>
            </div>


        </header>
    )
}
export default Headers