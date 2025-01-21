import {useState} from "react";

interface ButtonProps{
    label:number
}

const Button=({label}:ButtonProps)=>{
    const[clicked,setClicked] =useState<boolean>(false)
    return(
        <button className={`border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2`} onClick={()=>setClicked(true)} >{label}</button>
    )
}
export default Button