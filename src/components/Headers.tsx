import { NavigateFunction, useNavigate} from "react-router";
import {CgProfile} from "react-icons/cg";
import "./header.css"

const Headers =()=>{
    const navigate:NavigateFunction =useNavigate();
    return(
        <header className={"header shadow-xl"}>
            <p className={"logo text-[#ff914d]"}>Nevani <span className={"text-[#5271ff] border-red-500"}>Housing</span></p>
            <nav>
                <ul>
                    <li onClick={()=>navigate("/")}>Home</li>
                    <li onClick={()=>navigate("/properties")}>Properties</li>
                    <li>Service</li>
                    <li onClick={()=>navigate("/about")}>About</li>
                    <li onClick={()=>navigate("/contact")}>Contact</li>
                    <li onClick={()=>navigate("/faqs")}>Faqs</li>
                </ul>
                </nav>
            <div className={"profile__info__container"}>
                <button className={"profile__info"}>Sign up <CgProfile /></button>
            </div>


        </header>
    )
}
export default Headers