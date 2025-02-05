import {useNavigate} from "react-router";
import "./imageAnimation.css"
import * as motion from "motion/react-client"

const WelcomePage =()=>{
    const navigate =useNavigate()
    return(
        <main className={"flex flex-col p-10 scroll-smooth mt-12"}>
            <motion.section className={"home flex gap-2  w-full h-screen text-black " }
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
            >
                <div className={"flex flex-col w-full justify-center content-center"}>
                    <h1 className={"text-7xl font-extrabold w-[800px] ml-16"}>Welcome to Nevani! Your Dream Home Awaits!</h1>
                    <p className={"text-4xl mt-6 mb-6"}>Your journey to finding the perfect home starts here.</p>
                    <p className={"content-start"}>Our catalogue will surprise you.Rather discover an unprecedented offers of luxury properties</p>

                    <button className={"rounded-3xl p-4 bg-black text-white font-bold w-fit mt-10"} >catalogue</button>
                </div>
                <div>
                    <img src={"src/assets/image.png"} className={"w-full h-screen object-cover "}/>
                </div>

            </motion.section>
            <section className={"flex w-full justify-center content-center items-center"} id={"#property"}>
                <div className={"flex flex-col w-[40%]"}>
                    <h1 className={"text-7xl font-bold text-[rgb(0,0,0,0.7)]"}>Find The Best Apartments for you</h1>
                    <button
                        className={" bg-black text-white pt-2 pb-2 pl-4 pe-4 rounded-2xl w-fit mt-10 justify-center content-center hover:bg-[rgb(0,0,0,0.5]"}
                        onClick={()=>navigate("/properties")}
                    >
                        Explore
                    </button>
                </div>
                <div>
                    <img src={"https://i.pinimg.com/236x/b9/56/35/b956350c800b9d33c5e529bda8ee5e7e.jpg"} className={"w-[700px] h-[1000px] object-contain rounded-3xl"}/>
                </div>
            </section>
        </main>

    )
}
export default WelcomePage