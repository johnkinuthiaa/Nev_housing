import {useEffect, useState} from "react";
import RoomIcon from '@mui/icons-material/Room';
import Order from "../components/Order.tsx";
import {Bathroom, Bed, DirectionsCar, FitnessCenter, Waves} from "@mui/icons-material";
import "./Description.css"
import * as motion from "motion/react-client"

const DescriptionPage =()=>{
    const url =window.location.href
    const endpoint =url.match(/[^/]+$/)
    const BASEURL =`http://localhost:8080/api/v1/listings/get/id?id=${endpoint}`
    const [content,setContent] =useState("overview")
    const[propertyInfo,setPropertyInfo] =useState<object>({})
    const[reviews,setReviews] =useState<string[]>([])
    const fetchData =(async ()=>{
        const response =await fetch(BASEURL,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                setPropertyInfo(data?.listing)
                setReviews(data?.listing?.reviewsList)
            }

        }
    })
    useEffect(() => {
        fetchData()
    }, []);

    return(
        <motion.div className={"bg-[white] shadow-2xl rounded-2xl mt-[10px] p-3 flex flex-col m-auto w-[60%] h-[1100px]"}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
        >
            <div>
                <img src={propertyInfo.imgUrl} className={"rounded-3xl w-[700px] h-[500px] object-fill"}/>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex justify-between w-[40%] mt-4 mb-4 items-center"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"text-4xl font-bold text-[#5271ff] "}>{propertyInfo.name}</h1>
                        <p className={"font-light"}><RoomIcon/>{propertyInfo.location}</p>
                    </div>
                    <div>
                        <p className={"font-extrabold"}>Ksh {propertyInfo.regularPrice} <span className={"font-light"}> /month</span></p>
                    </div>
                </div>
                <div className={"flex justify-between items-center p-5 "}>
                    <h2 className={"cursor-pointer text-2xl font-bold"} onClick={()=>{
                        setContent("overview")
                    }}>Overview</h2>
                    <h2 className={"cursor-pointer text-2xl font-bold"} onClick={()=>{
                        setContent("reviews")
                    }}>Reviews</h2>
                    <h2 className={"cursor-pointer text-2xl font-bold"} onClick={()=>{
                        setContent("about")
                    }}>About</h2>

                </div>
                <div className={"p-3 leading-7"}>
                    {content ==="overview"&&<div className={"flex flex-col"}>
                        <h2 className={"cursor-pointer leading-7"}>{propertyInfo.description} </h2>
                        <p className={"break-words p-2"}>{propertyInfo.details}</p>
                        <div className={"flex flex-wrap gap-5 w-[50%] features mb-2"}>
                            <div><Bed/>{propertyInfo.bedrooms} Beds</div>
                            <div><Bathroom/>{propertyInfo.bathrooms} Bathrooms</div>
                            <div>{propertyInfo.furnished===true?"Furnished":"Not furnished"}</div>
                            <div><DirectionsCar/>{propertyInfo.parking ===true?"parking provided":"No parking provided"}</div>
                            <div><Waves/>{propertyInfo.swimmingPool ===true?"Has swimming pool":"No swimming pool"}</div>
                            <div><FitnessCenter/>{propertyInfo.gym ===true?"Gym":"No gym"}</div>
                        </div>
                        <Order/>

                    </div>}
                    {content ==="reviews"&&<div className={"flex flex-col"}>
                        <h2 >Reviews </h2>
                        {reviews.map((review)=>(
                            <div className={"flex  gap-2 flex-col  p-3"}>
                                <p>{review.review}</p>
                                <p>{review.createdOn}</p>
                            </div>
                        ))}
                        <Order/>

                    </div>}
                    {content ==="about"&&<div className={"flex flex-col"}>
                        <h2 >About </h2>
                        <p className={"break-words p-2"}>{propertyInfo.details}</p>
                        <div className={"flex flex-wrap"}>

                        </div>
                        <Order/>

                    </div>}
                </div>
            </div>
            <div></div>

        </motion.div>
    )
}
export default DescriptionPage

