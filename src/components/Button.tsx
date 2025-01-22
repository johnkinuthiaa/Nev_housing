import {useState} from "react";

interface ButtonProps{
    label:number
}

const Button=({label}:ButtonProps)=>{
    const[clicked,setClicked] =useState<boolean>(false)
    return(
        <button className={`border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 ${clicked&&"bg-blue-600 text-white"}`} onClick={()=>setClicked(!clicked)} >{label}</button>
    )
}
export default Button