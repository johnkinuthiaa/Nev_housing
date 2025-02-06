import { NavigateFunction, useNavigate} from "react-router";
import {CgProfile} from "react-icons/cg";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./header.css"
import {useState} from "react";

const Headers =()=>{

    const navigate:NavigateFunction =useNavigate();
    const[isMenuOpen,setIsMenuOpen] =useState(false)
    return(
        <header className={"header shadow-xl fixed w-full top-0 z-10 bg-white"}>
            <p className={"logo text-[#ff914d]"}>Nevani <span className={"text-[#5271ff] border-red-500"}>Housing</span></p>
            <div className={"desktop__nav"}>
                <nav >
                    <ul>
                        <li onClick={()=>navigate("/")}>Home</li>
                        <li onClick={()=>navigate("/properties")}>Properties</li>
                        <li>Service</li>
                        <li onClick={()=>navigate("/about")}>About</li>
                        <li onClick={()=>navigate("/contact")}>Contact</li>
                        <li onClick={()=>navigate("/faqs")}>Faqs</li>
                    </ul>
                </nav>
            </div>
            <div className={"mobile__menu"}>
                {isMenuOpen?
                    <button onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                        <CloseIcon/>
                    </button> :
                    <button onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                        <MenuIcon/>
                    </button>
                }
                {isMenuOpen&&
                    <div className={"mobile__navigation"}>
                        <nav className={" relative z-10"}>
                            <ul>
                                <li onClick={()=>navigate("/")}>Home</li>
                                <li onClick={()=>navigate("/properties")}>Properties</li>
                                <li>Service</li>
                                <li onClick={()=>navigate("/about")}>About</li>
                                <li onClick={()=>navigate("/contact")}>Contact</li>
                                <li onClick={()=>navigate("/faqs")}>Faqs</li>
                                <div className={"profile__info__container flex gap-2"}>
                                    <button className={"profile__info border rounded-2xl font-bold"} onClick={()=>navigate("/register")}>Sign up</button>
                                    <button className={"profile__info  rounded-2xl bg-[#5271ff] font-bold text-white"} onClick={()=>navigate("/login")}>Log in</button>
                                </div>
                            </ul>
                        </nav>
                    </div>

                }

            </div>






        </header>
    )
}
export default Headers