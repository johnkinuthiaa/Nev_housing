import {useState} from "react";

const CreateListing =()=>{
    const formData =new FormData()
    const[propertyImage,setPropertyImage] =useState("")
    const propertyObject ={
        name: "kinyangarika village",
        description: "Cozy 1-bedroom apartment with a private balcony. Perfect for a single professional.",
        address: "Karen",
        regularPrice: 6500,
        flooringType: "carpet",
        neighbourHoodName: "Karen",
        squareFootage: 12,
        yearBuilt: 2019,
        sizeOfLand: 0.8,
        appliancesIncluded: [
            "refrigerator",
            "microwave"
        ],
        postalCode: "4462 Karen",
        status: "has vacancy for 1 person",
        kitchen: 1,
        nearBySchools: [
            "Olerai",
            "Junior Hub",
            "BrookHouse"
        ],
        petPolicy: "no pets allowed",
        swimmingPool: false,
        gym: false,
        electricityType: "prepaid token",
        discount: 0,
        bathrooms: 1,
        location: "Karen",
        bedrooms: 1,
        isFurnished: true,
        hasParking: false,
        type: "rental",
        imgUrl: "https://i.pinimg.com/236x/96/ac/c5/96acc55a45c06a2b9403ecece5ae99ea.jpg",
        hasOffer: "false",

    }
    formData.append("listingInfo",JSON.stringify(propertyObject))
    formData.append("image",propertyImage)
    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")
    const send =(async ()=>{
        const response =await fetch("http://localhost:8080/api/v1/listings/admin/create/new-listing?id=1",{
            method:"POST",
            body:formData,
            headers:myHeaders
        })
        const data =await response.json()
        console.log(data)
    })

    return(
        <div>
            <input type={"file"} onChange={(e)=>setPropertyImage(e.target.files[0])}/>
            <button type={"submit"} onClick={(e)=>{
                e.preventDefault()
                console.log("clicked")
                send()
            }}>submit</button>
        </div>
    )
}
export default CreateListing