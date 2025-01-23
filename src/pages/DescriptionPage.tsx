import {useEffect, useState} from "react";

const DescriptionPage =()=>{
    const url =window.location.href
    const endpoint =url.match(/[^/]+$/)
    const BASEURL =`http://localhost:8080/api/v1/listings/get/id?id=${endpoint}`
    const[propertyInfo,setPropertyInfo] =useState<object>({})
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
                setPropertyInfo(data.listing)
            }

        }
    })
    useEffect(() => {
        fetchData()
    }, []);
    return(
        <div className={"bg-[whitesmoke] p-3 flex flex-col"}>
            <div>
                <img src={propertyInfo.imgUrl}/>
            </div>
            <div className={"flex flex-col"}>
                <div className={"flex justify-between"}>
                    <div>
                        <h1>{propertyInfo.name}</h1>
                        <p>{propertyInfo.location}</p>
                    </div>
                    <div>
                        <h2>${propertyInfo.regularPrice} <span> /month</span></h2>
                    </div>
                </div>
                <div></div>
                <div className={"flex flex-col"}>
                    <h2>Property details</h2>
                    <p>{propertyInfo.details}</p>
                </div>
            </div>
            <div></div>

        </div>
    )
}
export default DescriptionPage

