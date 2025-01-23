import {useState} from "react";


interface CardProps{
    imageUrl:string,
    title:string,
    location:string,
    description:string,
    price:number,
    beds:number
    bathrooms:number,
    id:number
}
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
import {useNavigate} from "react-router";


const Card =({imageUrl,title,location,description,price,bathrooms,beds,id}:CardProps)=>{
    const navigate =useNavigate()
    const[clicked,setClicked] =useState(false)
    return(
        <div className={`flex border-2 border-gray-300 rounded-2xl p-3 w-full justify-between content-start mt-4 `} id={id} onClick={()=>navigate(`/description/${id}`)}>
            <div className={"flex"}>
                <img src={imageUrl} alt={"title"} className={"h-[189px] w-[200px] rounded-2xl"}/>
                <div className={"flex flex-col ml-5 leading-9 w-[940px]"}>
                    <h1 className={"text-black font-bold text-3xl"}>{title}</h1>
                    <p className={"text-gray-600"}><LocationOnIcon/><span>{location}</span></p>
                    <p>{description}</p>
                </div>
            </div>
            <div className={"mr-9 flex flex-col justify-between p-7"}>
                <h3 className={"flex font-bold text-2xl"}>Ksh.<span className={"mr-10 font-extrabold"}>{price}</span></h3>

                <p className={" border-b-2 border-b-gray-200 w-full text-gray-500"}><KingBedIcon/> <span className={"font-bold text-black"}>{beds}</span></p>
                <p className={"border-b-2 border-b-gray-200 w-full text-gray-500"}><BathtubIcon/> <span className={"font-bold text-black"}>{bathrooms}</span></p>
            </div>
        </div>
    )

}
export default Card