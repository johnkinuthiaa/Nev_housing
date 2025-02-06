import {useEffect, useState} from "react";
import RoomIcon from '@mui/icons-material/Room';
import Order from "../components/Order.tsx";
import {Bathroom, Bed, DirectionsCar, FitnessCenter, Waves} from "@mui/icons-material";
import "./styles/Description.css"
import * as motion from "motion/react-client"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CountertopsIcon from '@mui/icons-material/Countertops';
import PetsIcon from '@mui/icons-material/Pets';
import SchoolIcon from '@mui/icons-material/School';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import CategoryIcon from '@mui/icons-material/Category';
import InfoIcon from '@mui/icons-material/Info';



const DescriptionPage =()=>{
    const url =window.location.href
    const endpoint =url.match(/[^/]+$/)
    const BASEURL =`http://localhost:8080/api/v1/listings/get/id?id=${endpoint}`
    const REVIEW_URL =`http://localhost:8080/api/v1/reviews/create?userId=4&listingId=${endpoint}`
    const [review,setReview] =useState("")
    const [content,setContent] =useState("overview")
    const[propertyInfo,setPropertyInfo] =useState<object>({})
    const[reviews,setReviews] =useState<string[]>([])

    useEffect(() => {
        fetchData()
    }, []);

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
    const sendReview =(async()=>{
        const response =await fetch(REVIEW_URL,{
            method:"POST",
            body:JSON.stringify({
                review:review
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        const data =await response.json()
        console.log(data.message)
    })


    return(
        <motion.div className={"bg-[white] shadow-2xl rounded-2xl mt-28 p-3 flex flex-col m-auto w-[60%] h-full"}
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
                <h1 className={"text-4xl font-bold text-[#5271ff] mt-3 mb-3"}>{propertyInfo.name}</h1>
                <div className={"flex justify-between w-[50%] mt-4 mb-4 items-center"}>
                    <div className={"flex flex-col gap-4"}>
                        <p className={"font-light"}><RoomIcon/>{propertyInfo?.location}</p>
                        <p className={"font-bold"}><AccessTimeIcon/> {propertyInfo?.createdAt?.toString().substring(0,10)} <span className={"ml-2 text-gray-600"}>{propertyInfo?.createdAt?.toString().substring(11,19)} hrs</span> </p>
                    </div>
                    <div className={""}>
                        <p className={"font-extrabold"}>Ksh <span className={"text-2xl"}>{propertyInfo.regularPrice}</span><span className={"font-bold text-gray-700"}> /month</span></p>
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
                        <div className={"property__amenities mb-2"}>
                            <div className={"flex items-center text-[#ff914d]"}><p className={"font-bold "}><ElectricalServicesIcon/> Electricity Type: <span className={"font-normal text-black"}>{propertyInfo.electricityType}</span> </p></div>
                            <div className={"flex items-center "}><p className={"text-[#ff914d] font-bold "}><InfoIcon/> Status: <span className={"font-normal text-black"}>{propertyInfo.status}</span></p></div>
                            <p className={"font-bold text-[#ff914d]"}> <PetsIcon/> Pet Policy: <span className={"font-normal text-black "}>{propertyInfo.petPolicy}</span></p>
                            <div className={"flex gap-2 flex-col"}>
                                <p className={"font-bold text-[#ff914d]"}><CategoryIcon/>Appliances:</p>
                                <div className={"flex gap-5 flex-wrap ml-14"}>
                                    {propertyInfo?.appliancesIncluded?.map((appliance:string)=>(
                                        <div>{appliance}</div>
                                    ))}
                                </div>

                            </div>
                            <div className={"flex gap-2 flex-col"}>
                                <p className={"font-bold text-[#ff914d]"}><SchoolIcon/> Nearby schools:</p>
                                <div className={"gap-5 flex  flex-col ml-14"}>
                                    {propertyInfo?.nearBySchools?.map((school:string)=>(
                                        <div>{school}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={"flex flex-wrap gap-5 w-[60%] features mb-2 mt-3"}>
                            <div><Bed/>{propertyInfo.bedrooms} Beds</div>
                            <div><Bathroom/>{propertyInfo.bathrooms} Bathrooms</div>
                            <div><CountertopsIcon/>{propertyInfo.kitchen} kitchens</div>
                            <div>{propertyInfo.furnished===true?"Furnished":"Not furnished"}</div>
                            <div><DirectionsCar/>{propertyInfo.parking ===true?"parking provided":"No parking provided"}</div>
                            <div><Waves/>{propertyInfo.swimmingPool ===true?"Has swimming pool":"No swimming pool"}</div>
                            <div><FitnessCenter/>{propertyInfo.gym ===true?"Gym":"No gym"}</div>

                        </div>
                        <Order/>

                    </div>}
                    {content ==="reviews"&&
                        <div className={"flex flex-col gap-3 border-t  border-t-gray-400 mt-4"}>
                        <h2 className={"font-bold text-2xl"}>Reviews </h2>
                        <div className={"flex flex-wrap gap-5"}>
                            {reviews.map((review)=>(
                                <div className={"flex flex-col p-4 shadow-xl h-[200px] w-[46%]"}>
                                    <p>{review.review}</p>
                                    <p className={""}>Created on: {review.createdOn.toString().substring(0,10)} at {review.createdOn.toString().substring(11,19)} hrs</p>
                                </div>
                            ))}
                        </div>
                        <form className={"flex flex-col w-[50%] mt-10"}
                              onSubmit={(e)=>{
                                  e.preventDefault()
                                  sendReview()
                              }}
                        >
                            <label>Write review: </label>
                            <textarea placeholder={"review..."} spellCheck={"true"} required={true}
                                      onChange={(e)=>setReview(e.target.value)}
                                      className={"border border-black rounded-2xl p-2 h-[200px] outline-0 active:outline-0"}>
                            </textarea>
                            <button className={"p-3 rounded-2xl text-white bg-black w-fit font-bold mt-2"} type={"submit"}>Submit</button>
                        </form>
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

