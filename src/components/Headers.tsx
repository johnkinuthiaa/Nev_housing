import { NavigateFunction, useNavigate} from "react-router";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./styles/header.css"
import {useState} from "react";
import * as motion from "motion/react-client"

const Headers =()=>{

    const navigate:NavigateFunction =useNavigate();
    const[isMenuOpen,setIsMenuOpen] =useState(false)
    return(
        <>
        <header className={"header shadow-xl relative w-full top-0 z-10 bg-white"}>
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
            <div className={"profile__info__container__desktop flex gap-2"}>
                <button className={"profile__info border rounded-2xl font-bold"} onClick={()=>navigate("/register")}>Sign up</button>
                <button className={"profile__info  rounded-2xl bg-[#5271ff] font-bold text-white"} onClick={()=>navigate("/login")}>Log in</button>
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


            </div>
        </header>
            {isMenuOpen&&
                <motion.nav className={"mobile__navigation shadow-2xl"}
                     initial={{ opacity: 0, scale: 0.5 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{
                         duration: 0.8,
                         delay: 0.2,
                         ease: [0, 0.71, 0.2, 1.01],
                     }}
                >
                    <ul >
                        <li onClick={()=> {
                            navigate("/")
                            setIsMenuOpen(false)
                        }}>Home</li>
                        <li onClick={()=> {
                            navigate("/properties")
                            setIsMenuOpen(false)
                        }}>Properties</li>
                        <li>Service</li>
                        <li onClick={()=> {
                            navigate("/about")
                            setIsMenuOpen(false)
                        }}>About</li>
                        <li onClick={()=> {
                            navigate("/contact")
                            setIsMenuOpen(false)
                        }}>Contact</li>
                        <li onClick={()=> {
                            navigate("/faqs")
                            setIsMenuOpen(false)
                        }}>Faqs</li>

                        <div className={"profile__info__container flex gap-2"}>
                            <button className={"profile__info border rounded-2xl font-bold"} onClick={()=> {
                                navigate("/register")
                                setIsMenuOpen(false)
                            }}>Sign up</button>
                            <button className={"profile__info  rounded-2xl bg-[#5271ff] font-bold text-white"} onClick={()=> {
                                navigate("/login")
                                setIsMenuOpen(false)
                            }}>Log in</button>
                        </div>
                    </ul>
                    <button className={"absolute top-5 right-0 ml-5 rounded-full text-white bg-red-500 p-1"} onClick={()=>{
                        setIsMenuOpen(false)
                    }}><CloseIcon/></button>
                </motion.nav>
            }
        </>
    )
}
export default Headers