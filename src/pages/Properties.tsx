import {useState} from "react";
import Card from '../components/Card.tsx';
import useSWR from "swr";
import Loading from "../components/Loading.tsx";
import "./styles/properties.css"

const Properties =()=>{

    const PROPERTY_URL:string ="http://localhost:8080/api/v1/listings/all"

    const[location,setLocation] =useState<string>("")
    // const[filters,setFilters] =useState<number>(0)
    // const[bathrooms,setBathrooms] =useState<number>(0)
    // const[bedrooms,setBedrooms] =useState<number>(0)
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
                setProperty([])
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
                setProperty(data.listings)
                setLocation("")
            }
            if(data.statusCode ===404){
                setProperty([])
                return <div className={"text-center flex justify-center font-bold text-red-600"}>{data.message}</div>
            }
        }

    })
    const{isLoading} =useSWR("http://localhost:8080/api/v1/listings/all",fetchData)
    if(isLoading){
        return <div className={"mt-40 text-center flex justify-center"}><Loading/></div>
    }
    // if(error){
    //     return <div className={"text-center flex justify-center font-bold text-red-600 mt-40"}>Error fetching data...</div>
    // }
    return(
        <div className={"properties__container__main flex p-7 mt-16"}>.
            <div className={"properties__container w-[75%] p-10 bg-white text-black h-screen flex flex-col "}>
                <form onSubmit={(e)=> {
                    e.preventDefault()
                    fetchPropertyByLocation()
                }} className={"search__container flex justify-center gap-5 w-[80%] ml-16"}>
                    <input type={"search"} placeholder={"Search location"}
                           className={"search__location__input border-black border-2 rounded-2xl p-2 w-[30%] outline-0"}
                           onChange={
                        (e)=>setLocation(e.target.value)}
                           min={3}
                    />
                    <button type={"submit"}  className={"font-bold text-white bg-black p-3 rounded-2xl"}>Search</button>
                </form>
                <div className={"card__holder mt-12 flex flex-wrap gap-4 sm:w-full pb-4"}>
                    {property.map(({name,description,location,imgUrl,regularPrice,id}:string)=>(
                        <Card title={name} description={description} imageUrl={imgUrl} location={location} price={regularPrice} id={id}/>
                    ))}

                    </div>
            </div>
            {/*<aside className={"filter__container w-[25%] ml-2.5 mr-4 p-3 flex flex-col rounded-xl shadow-2xl fixed right-0 h-full scroll-mt-0 "}>*/}
            {/*    <h1 className={"text-2xl font-bold text-[#ff914d]"}>Filter Properties</h1>*/}
            {/*    <form className={"flex flex-wrap gap-6 mt-2"}>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={"text-[#5271ff] mb-1 text-2xl font-bold"}>Price Range</h2>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 0 -Ksh 10000</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 10000 -Ksh 20000</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 10000 -Ksh 20000</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 10000 -Ksh 20000</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 10000 -Ksh 20000</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 10000 -Ksh 20000</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"10000"} name={"price"}/>*/}
            {/*                <label className={"ml-2"}>Ksh 10000 -Ksh 20000</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={"text-[#5271ff] mb-1 text-2xl font-bold"}>House Type</h2>*/}
            {/*            <div >*/}
            {/*                <input type={"radio"} value={"home"} name={"house_type"}/>*/}
            {/*                <label className={"ml-2"}>Sale</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"rental"} name={"house_type"}/>*/}
            {/*                <label className={"ml-2"}>Rentals</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"apartments"} name={"house_type"}/>*/}
            {/*                <label className={"ml-2"}>Apartments</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={"text-[#5271ff] mb-1 text-2xl font-bold"}>Bedrooms</h2>*/}
            {/*            <div >*/}
            {/*                <input type={"radio"} value={"0"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>Bedsitters</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"1"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>1</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"2"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>2</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"3"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>3</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"4"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>4</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"5"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>5</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"6"} name={"bedrooms"}/>*/}
            {/*                <label className={"ml-2"}>6+</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={"text-[#5271ff] mb-1 text-2xl font-bold"}>Bathrooms</h2>*/}
            {/*            <div >*/}
            {/*                <input type={"radio"} value={"0"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>Bedsitters</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"1"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>1</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"2"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>2</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"3"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>3</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"4"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>4</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"5"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>5</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"6"} name={"bathrooms"}/>*/}
            {/*                <label className={"ml-2"}>6+</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={"text-[#5271ff] mb-1 text-2xl font-bold"}>swimming pool</h2>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"true"} name={"swimming_pool"}/>*/}
            {/*                <label className={"ml-2"}>swimming</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"false"} name={"swimming_pool"}/>*/}
            {/*                <label className={"ml-2"}>no swimming pool</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={"text-[#5271ff] mb-1 text-2xl font-bold"}>Gym</h2>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"true"} name={"gym"}/>*/}
            {/*                <label className={"ml-2"}>true</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"false"} name={"gym"}/>*/}
            {/*                <label className={"ml-2"}>false</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}
            {/*        <fieldset className={" leading-7"}>*/}
            {/*            <h2 className={" text-[#5271ff] text-2xl font-bold"}>Parking</h2>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"true"} name={"parking"}/>*/}
            {/*                <label className={"ml-2"}>true</label>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <input type={"radio"} value={"false"} name={"parking"}/>*/}
            {/*                <label className={"ml-2"}>false</label>*/}
            {/*            </div>*/}
            {/*        </fieldset>*/}

            {/*        <button className={"h-fit rounded-3xl text-white pt-2 pb-2 pl-3 pe-3 bg-black"}>Search</button>*/}
            {/*    </form>*/}
            {/*</aside>*/}
        </div>


    )
}
export default Properties