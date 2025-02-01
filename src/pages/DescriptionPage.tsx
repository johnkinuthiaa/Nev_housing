import {useEffect, useState} from "react";
import RoomIcon from '@mui/icons-material/Room';

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
        <div className={"bg-[white] shadow-2xl rounded-2xl mt-[10px] p-3 flex flex-col m-auto w-[80%]"}>
            <div>
                <img src={propertyInfo.imgUrl} className={"rounded-3xl w-[700px] h-[500px] object-fill"}/>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex justify-between"}>
                    <div className={"flex flex-col"}>
                        <h1 className={"text-4xl font-bold text-black "}>{propertyInfo.name}</h1>
                        <p className={"font-light"}><RoomIcon/>{propertyInfo.location}</p>
                    </div>
                    <div>
                        <h2 className={"font-bold"}>Ksh {propertyInfo.regularPrice} <span className={"font-light"}> /month</span></h2>
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
                {content ==="overview"&&<div className={"flex flex-col"}>
                    <h2 className={"cursor-pointer leading-7"}>{propertyInfo.description} </h2>
                    <p className={"break-words p-2"}>{propertyInfo.details}</p>
                    <div className={"flex flex-wrap"}>

                    </div>
                    <button>Contact Agent</button>
                    <button>Order now</button>

                </div>}
                {content ==="reviews"&&<div className={"flex flex-col"}>
                    <h2 >Reviews </h2>
                    {reviews.map((review)=>(
                        <div className={"flex  gap-2 flex-col  p-3"}>
                            <p>{review.review}</p>
                            <p>{review.createdOn}</p>
                        </div>
                    ))}

                    <button>Contact Agent</button>
                    <button>Order now</button>

                </div>}
                {content ==="about"&&<div className={"flex flex-col"}>
                    <h2 >About </h2>
                    <p className={"break-words p-2"}>{propertyInfo.details}</p>
                    <div className={"flex flex-wrap"}>

                    </div>
                    <button>Contact Agent</button>
                    <button>Order now</button>

                </div>}
            </div>
            <div></div>

        </div>
    )
}
export default DescriptionPage

