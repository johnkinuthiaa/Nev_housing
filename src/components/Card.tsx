

interface CardProps{
    imageUrl:string,
    title:string,
    location:string,
    description:string,
    price:number,
    beds:number
    bathrooms:number
}
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BathtubIcon from "@mui/icons-material/Bathtub";
import KingBedIcon from "@mui/icons-material/KingBed";
const Card =({imageUrl,title,location,description,price,bathrooms,beds}:CardProps)=>{
    return(
        <div className={"flex shadow-2xl border-2 border-gray-600 rounded-2xl p-3 w-full justify-between"}>
            <img src={imageUrl} alt={"title"} className={"h-28 w-32 rounded-2xl"}/>
            <div className={"flex flex-col"}>
                <h1 className={"text-black font-bold text-3xl"}>{title}</h1>
                <p><LocationOnIcon/>{location}</p>
                <p>{description}</p>
            </div>
            <div>
                <h3>{price}</h3>
                <p><KingBedIcon/> {beds}</p>
                <p><BathtubIcon/> {bathrooms}</p>
            </div>
        </div>
    )

}
export default Card