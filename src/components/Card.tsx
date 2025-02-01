
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {useNavigate} from "react-router";

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

const Card =({imageUrl,title,location,description,price,bathrooms,beds,id}:CardProps)=>{
    const navigate =useNavigate()
    return(
        <div id={id} onClick={()=>navigate(`/description/${id}`)}>
            <div>
                <img src={imageUrl} alt={"property"} className={"rounded-2xl h-[420px] w-[420px] object-fill cursor-pointer  hover:shadow-2xl transform:all ease-out "}/>
            </div>
            <div className={"-mt-36 w-[390px] ml-4 p-2 absolute bg-white rounded-2xl flex flex-col"}>
                <div className={"flex flex-col"}>
                    <h1 className={"font-bold text-2xl "}>{title}</h1>
                    <h3 className={"text-blue-700"}><LocationOnIcon/><span className={"text-gray-700 font-semibold "}> {location}</span> </h3>
                </div>
                <div className={"flex justify-between items-center mt-2"}>
                    <h2 className={"font-extrabold text-xl"}>Ksh {price} <span className={"text-gray-600 font-light"}>/month</span></h2>
                    <h2>Ratings</h2>
                </div>
            </div>
        </div>
    )

}
export default Card