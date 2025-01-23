import SearchIcon from '@mui/icons-material/Search';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import {useEffect, useState} from "react";
import Button from "../components/Button.tsx";
import KingBedIcon from '@mui/icons-material/KingBed';
import Card from '../components/Card.tsx';
import useSWR from "swr";
const Properties =()=>{

    const PROPERTY_URL:string ="http://localhost:8080/api/v1/listings/all"

    const[location,setLocation] =useState<string>("Default")
    const[filters,setFilters] =useState<number>(0)
    const[bathrooms,setBathrooms] =useState<number>(0)
    const[bedrooms,setBedrooms] =useState<number>(0)
    const[property,setProperty] =useState<string[]>([])
    const LOCATION_SEARCH =`http://localhost:8080/api/v1/listings/get/location?location=${location}`


    const myHeaders =new Headers()
    myHeaders.append("Content-Type","application/json")

    const fetchData =(async ()=>{
        const response =await fetch(PROPERTY_URL,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                setProperty(data.listings)
            }else{
                throw Error
            }
        }
    })
    const fetchPropertyByLocation =(async ()=>{
        const response =await fetch(LOCATION_SEARCH,{
            method:"GET",
            headers:myHeaders
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                setProperty(data.listings.sort((a: number, b: number)=>b.id-a.id))
            }else{
                return <div>Error fetching data</div>
            }
        }

    })
    const{isLoading,error} =useSWR("http://localhost:8080/api/v1/listings/all",fetchData)
    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching data...</div>
    }
    return(
        <div className={"flex p-7"}>

            <div className={"w-[75%] p-10 bg-white text-black h-screen flex flex-col rounded-2xl  "}>
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    fetchPropertyByLocation()
                }} className={"flex justify-center align-middle gap-5 w-full "}>
                    <div className={"flex rounded-full  border-black border-2 "}>
                        <div className={"ml-3 mt-3"}><SearchIcon/></div>
                        <input type={"text"} placeholder={"Enter location"} className={"ml-2 p-3 active:outline-0 "} onChange={(e)=>setLocation(e.target.value)}/>
                        <div className={" ml-3 w-52 border-l-4 "}>{location}</div>
                    </div>
                    <div className={"text-black font-bold"}>filters {filters}</div>
                    <button type={"submit"} className={"rounded-xl text-white bg-black pl-5 pe-5 pt-2 pb-2 ml-3"}>Search</button>
                </form>
                <div className={"mt-12 flex flex-wrap gap-1.5"}>
                    {property.map(({name,description,location,bathrooms,bedrooms,imgUrl,regularPrice,id}:string)=>(
                        <Card title={name} bathrooms={bathrooms} beds={bedrooms} description={description} imageUrl={imgUrl} location={location} price={regularPrice} id={id}/>
                    ))}

                    </div>
            </div>
            <aside className={"h-[50%] w-[25%]  mt-12 ml-2.5 p-6 flex flex-col rounded-xl "}>
                {/*bg-*/}
                <h1 className={"text-2xl font-bold"}>Filter Properties</h1>
                <div className={"flex mt-4 gap-2"}>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>All</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>House</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>Apartments</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>Rentals</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>Sale</button>
                </div>
                <div className={"flex mt-8 gap-2"}>
                    <LocalHotelIcon/>
                    <Button label={1} />
                    <Button label={2} />
                    <Button label={3} />
                    <Button label={4} />
                    <Button label={5} />
                    <Button label={6} />
                </div>
                <div className={"flex mt-6 gap-2"}>
                    <BathtubIcon/>
                    <Button label={1} />
                    <Button label={2} />
                    <Button label={3} />
                    <Button label={4} />
                    <Button label={5} />
                    <Button label={6} />
                </div>
                <div className={"flex mt-6 gap-2"}>
                    <KingBedIcon/>
                    <Button label={1} />
                    <Button label={2} />
                    <Button label={3} />
                    <Button label={4} />
                    <Button label={5} />
                    <Button label={6} />
                </div>
                <div className={"flex mt-6 gap-2 flex-col"}>
                    <h1 className={"font-bold text-2xl"}>Furnished</h1>
                    <div>
                        <input type={"radio"} value={"furnished"} name={"furnished"}/>
                        <label className={"mr-5"}>True</label>
                        <input type={"radio"} value={"not-furnished"} name={"furnished"}/>
                        <label>False</label>
                    </div>
                </div>
                <div className={"flex mt-6 gap-2 flex-col "}>
                    <h1 className={"font-bold text-2xl"}>Parking</h1>
                    <div className={""}>
                        <fieldset className={""}>
                            <input type={"radio"} value={"hasParking"} name={"hasParking"}/>
                            <label className={"mr-5"}>True</label>

                            <label>False</label>
                            <input type={"radio"} value={"noParking"} name={"hasParking"}/>
                        </fieldset>
                    </div>
                </div>
                <div className={"flex mt-6 gap-2 flex-col "}>
                    <h1 className={"font-bold text-2xl"}>Swimming Pool</h1>
                    <div className={""}>
                        <fieldset className={""}>
                            <input type={"radio"} value={"hasSwimmingPool"} name={"hasSwimmingPool"}/>
                            <label className={"mr-5"}>True</label>

                            <label>False</label>
                            <input type={"radio"} value={"noSwimmingPool"} name={"noSwimmingPool"}/>
                        </fieldset>
                    </div>
                </div>
                <div className={"flex mt-6 gap-2 flex-col "}>
                    <h1 className={"font-bold text-2xl"}>Gym</h1>
                    <div className={""}>
                        <fieldset className={""}>
                            <input type={"radio"} value={"hasGym"} name={"hasSGym"}/>
                            <label className={"mr-5"}>True</label>

                            <label>False</label>
                            <input type={"radio"} value={"noGym"} name={"noGym"}/>
                        </fieldset>
                    </div>
                </div>
                <div className={"flex mt-6 gap-2 flex-col "}>
                    <h1 className={"font-bold text-2xl"}>Discount</h1>
                    <div className={""}>
                        <fieldset className={""}>
                            <input type={"radio"} value={"hasDiscount"} name={"hasSDiscount"}/>
                            <label className={"mr-5"}>True</label>

                            <label>False</label>
                            <input type={"radio"} value={"noDiscount"} name={"noDiscount"}/>
                        </fieldset>
                    </div>
                </div>
                <button className={"mt-12 rounded-3xl text-white pt-2 pb-2 pl-3 pe-3 bg-black"}>Search</button>
            </aside>
        </div>


    )
}
export default Properties