import {useNavigate} from "react-router";
import "./styles/imageAnimation.css"
import * as motion from "motion/react-client"
import Footer from "../components/Footer.tsx";
import {useState} from "react";
import useSWR from "swr";
import "./styles/welcomePage.css"



const WelcomePage =()=>{
    const [housesInNairobi,setHousesInNairobi] =useState<string[]>([])
    const LOCATION_BASE_URL ="http://localhost:8080/api/v1/listings/get/location?location=rongai"
    const navigate =useNavigate()

    const getLatestInNairobi =(async ()=>{
        const response =await fetch(LOCATION_BASE_URL,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            const data =await response.json()
            setHousesInNairobi(data.listings)
        }
    })
    const{isLoading} =useSWR(LOCATION_BASE_URL,getLatestInNairobi)

    return(
        <>
        <main className={"flex flex-col justify-center items-center mt-2 gap-5 scroll-smooth "}>
            <motion.section className={"home flex gap-2  w-full h-screen text-black " }
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
            >
                <div className={"flex flex-col w-full justify-center content-center ml-16"}>
                    <h1 className={"heading text-7xl font-extrabold w-[800px] "}>Welcome to Nevani! Your Dream Home Awaits!</h1>
                    <p className={"text-4xl mt-6 mb-6"}>Your journey to finding the perfect home starts here.</p>
                    <p className={"content-start"}>Our catalogue will surprise you.Rather discover an unprecedented offers of luxury properties</p>

                    <button className={"rounded-3xl p-4 bg-black text-white font-bold w-fit mt-10"} >catalogue</button>
                </div>
                <div>
                    <img src={"src/assets/image.png"} className={"w-full h-screen object-cover "}/>
                </div>

            </motion.section>
            <section className={"flex w-full justify-center content-center items-center"} id={"property"}>
                <div className={"heading__container flex flex-col w-[40%]"}>
                    <h1 className={"heading text-7xl font-bold text-[rgb(0,0,0,0.7)]"}>Find The Best Apartments for you</h1>
                    <button
                        className={" bg-black text-white pt-2 pb-2 pl-4 pe-4 rounded-2xl w-fit mt-16 flex items-center justify-center content-center hover:bg-[rgb(0,0,0,0.5]"}
                        onClick={()=>navigate("/properties")}
                    >
                        Explore
                    </button>
                </div>
                <div>
                    <img src={"https://i.pinimg.com/236x/b9/56/35/b956350c800b9d33c5e529bda8ee5e7e.jpg"} className={"w-[500px] h-[600px] object-contain rounded-2xl"}/>
                </div>
            </section>
            <section className={"flex flex-col justify-center items-center mt-16 gap-5"}>
                <p className={"font-bold text-4xl w-[400px] flex flex-col items-center leading-8"}>Newest Homes in <span className={"text-red-600"}>Nairobi</span></p>
                {/*<div className={"new__property__listings flex overflow-scroll scroll-smooth gap-2"}>*/}
                {/*    {housesInNairobi.map(({name,description,location,imgUrl,regularPrice,id}:string)=>(*/}
                {/*        <Card title={name} description={description} imageUrl={imgUrl} location={location} price={regularPrice} id={id}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
                <button className={"w-fit p-3 bg-green-600 hover:bg-green-500 transition-all ease-in duration-75 mt-5 rounded-full font-bold text-white"}
                        onClick={()=>navigate("/properties")}
                >Explore All homes</button>
            </section>
        </main>
        <Footer/>
    </>

    )
}
export default WelcomePage