

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
        <div className={"flex border-2 border-gray-300 rounded-2xl p-3 w-full justify-between content-start mt-4"}>
            <div className={"flex"}>
                <img src={imageUrl} alt={"title"} className={"h-[189px] w-[200px] rounded-2xl"}/>
                <div className={"flex flex-col ml-5 leading-9 w-[940px]"}>
                    <h1 className={"text-black font-bold text-3xl"}>{title}</h1>
                    <p><LocationOnIcon/>{location}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className={"mr-9 flex flex-col justify-between p-7"}>
                <h3>{price}</h3>
                <p className={" border-b border-b-gray-700 w-full"}><KingBedIcon/> {beds}</p>
                <p className={"border-b border-b-gray-700 w-full"}><BathtubIcon/> {bathrooms}</p>
            </div>
        </div>
    )

}
export default Card