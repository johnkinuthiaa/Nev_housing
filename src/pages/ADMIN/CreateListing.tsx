import {useState} from "react";
import "./adminListing.css"

interface ListingInfo{
    name:string,
    description:string,
    regularPrice:number,
    flooringType:string,
    neighbourHoodName:string,
    squareFootage:number,
    yearBuilt:number,
    sizeOfLand:number,
    appliancesIncluded:string[],
    postalCode:string,
    status:string,
    kitchen:number,
    nearBySchools:string[],
    petPolicy:string,
    swimmingPool:boolean,
    gym:boolean,
    electricityType:string,
    discount:number,
    bathrooms: number,
    location:string,
    isFurnished:boolean,
    hasParking:boolean,
    imgUrl:string
    hasOffer:boolean
    rooms:number,
    bedrooms:number
}
const CreateListing =()=>{
    const[propertyImage,setPropertyImage] =useState("")
    const[property,setProperty] =useState<ListingInfo>({
        bedrooms: 0, rooms: 0,
        appliancesIncluded: [],
        bathrooms: 0,
        description: "",
        discount: 0,
        electricityType: "",
        flooringType: "",
        gym: false,
        hasOffer: false,
        hasParking: false,
        imgUrl: "",
        isFurnished: false,
        kitchen: 0,
        location: "",
        name: "",
        nearBySchools: [],
        neighbourHoodName: "",
        petPolicy: "",
        postalCode: "",
        regularPrice: 0,
        sizeOfLand: 0,
        squareFootage: 0,
        status: "",
        swimmingPool: false,
        yearBuilt: 0
    })



    const myHeaders =new Headers()
    const send =(async ()=>{
        const formData = new FormData();
        formData.append('listingInfo', new Blob([JSON.stringify(property)], { type: 'application/json' }))
        formData.append('image', propertyImage)
        const response =await fetch("http://localhost:8080/api/v1/listings/admin/create/new-listing?id=1",{
            method:"POST",
            body:formData,
            headers:myHeaders
        })
        const data =await response.json()
        // console.log(property)
    })
    return(

        <div className={"admin__form"}>
            <form encType="multipart/form-data" className={"listing__creationForm"}>
                <label>Name:</label>
                <input type={"text"} onChange={(e)=>property.name=e.target.value}/>
                <label>Description:</label>
                <textarea placeholder={"Description"} onChange={(e)=>property.description=e.target.value}></textarea>
                <label>Price:</label>
                <input type={"number"}  onChange={(e)=>property.regularPrice=Number(e.target.value)}/>
                <label>Flooring-Type:</label>
                <input type={"text"} onChange={(e)=>property.flooringType=e.target.value}/>
                <label>neighbourHoodName:</label>
                <input type={"text"} onChange={(e)=>property.neighbourHoodName=e.target.value}/>
                <label>squareFootage:</label>
                <input type={"number"} onChange={(e)=>property.squareFootage=Number(e.target.value)}/>
                <label>yearBuilt:</label>
                <input type={"number"} onChange={(e)=>property.yearBuilt=Number(e.target.value)}/>
                <label>sizeOfLand:</label>
                <input type={"number"} onChange={(e)=>property.sizeOfLand=Number(e.target.value)}/>
                <label>postalCode:</label>
                <input type={"text"} onChange={(e)=>property.postalCode=e.target.value}/>
                <label>Status:</label>
                <input type={"text"} onChange={(e)=>property.status=e.target.value}/>
                <label>Kitchens:</label>
                <input type={"number"} onChange={(e)=>property.kitchen=Number(e.target.value)}/>
                <label>PetPolicy:</label>
                <input type={"text"} onChange={(e)=>property.petPolicy=e.target.value}/>
                <label>SwimmingPool:</label>
                <fieldset>
                    <input type={"radio"} name={"swimmingPool"} value={true} onChange={(e)=>property.swimmingPool=Boolean(e.target.value)}/>
                    <label>true</label>
                    <input type={"radio"} name={"swimmingPool"} value={false} onChange={(e)=>property.swimmingPool=Boolean(e.target.value)}/>
                    <label>false</label>
                </fieldset>
                <label>Gym:</label>
                <fieldset>
                    <input type={"radio"} name={"gym"} value={true} onChange={(e)=>property.gym=Boolean(e.target.value)}/>
                    <label>true</label>
                    <input type={"radio"} name={"gym"} value={false} onChange={(e)=>property.gym=Boolean(e.target.value)}/>
                    <label>false</label>
                </fieldset>
                <label>Parking:</label>
                <fieldset>
                    <input type={"radio"} name={"parking"} value={"true"} onChange={(e)=>property.hasParking=Boolean(e.target.value)}/>
                    <label>true</label>
                    <input type={"radio"} name={"parking"} value={"false"} onChange={(e)=>property.hasParking=Boolean(e.target.value)}/>
                    <label>false</label>
                </fieldset>

                <label>Location</label>
                <input type={"text"} onChange={(e)=>property.location=e.target.value}/>
                <label>Electricity Type:</label>
                <input type={"text"} onChange={(e)=>property.electricityType=e.target.value}/>
                <label>Discounted Amount:</label>
                <input type={"number"} onChange={(e)=>property.discount=Number(e.target.value)}/>
                <label>Bathrooms:</label>
                <input type={"number"} onChange={(e)=>property.bathrooms=Number(e.target.value)}/>
                <label>Bedrooms:</label>
                <input type={"number"} onChange={(e)=>property.bedrooms=Number(e.target.value)}/>
                <label>Rooms:</label>
                <input type={"number"} onChange={(e)=>property.rooms=Number(e.target.value)}/>
                <input type={"file"} onChange={(e)=>{
                    setPropertyImage(e.target.files[0])
                }}/>
                <button type={"submit"} onClick={(e)=>{
                    e.preventDefault()
                    console.log("clicked")
                    send()
                }}>submit</button>
            </form>

        </div>
    )
}
export default CreateListing