import LocationOnIcon from '@mui/icons-material/LocationOn';
import {useNavigate} from "react-router";
import * as motion from "motion/react-client"
import StarIcon from '@mui/icons-material/Star';
import "./styles/PropertyCard.css"

interface CardProps{
    imageUrl:string,
    title:string,
    location:string,
    description:string,
    price:number,
    id:string
    imageBytes:string
}

const Card =({title,location,price,id,imageBytes}:CardProps)=>{

    const byteCharacters =atob(imageBytes)
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);
    const myUrl =URL.createObjectURL(blob)

    const navigate =useNavigate()
    return(
        <motion.div id={id} onClick={()=>navigate(`/description/${id}`)}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className={"card"}
        >
            <div className={"image__container"}>
                <img src={myUrl} alt={"property"} className={"property__image rounded-2xl h-[420px] w-[420px] object-fill cursor-pointer  hover:shadow-2xl transform:all ease-out "}/>
            </div>
            <div className={"card__placeholder -mt-36 w-[390px] ml-4 p-2 absolute bg-white rounded-2xl flex flex-col"}>
                <div className={"flex flex-col border-b-gray-400 border-b rounded-2xl gap-2"}>
                    <p className={"font-bold text-2xl "}>{title}</p>
                    <h3 className={"text-blue-700"}><LocationOnIcon/><span className={"text-gray-700 font-semibold mb-2"}> {location}</span> </h3>
                </div>
                <div className={"card__price__holder flex justify-between items-center mt-2"}>
                    <p className={"price font-bold text-xl"}>Ksh {price} <span className={"text-gray-600 font-light"}>/month</span></p>
                    <p><span className={"text-yellow-500"}><StarIcon/></span>2/5</p>
                </div>
            </div>
        </motion.div>
    )

}
export default Card