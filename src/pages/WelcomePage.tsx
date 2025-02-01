import {useNavigate} from "react-router";
import "./imageAnimation.css"


const WelcomePage =()=>{
    const navigate =useNavigate()
    return(
        <main className={"flex flex-col p-10 scroll-smooth"}>
            <section className={"home flex gap-2  w-full h-screen text-black " }>
                <div className={"flex flex-col content-start mt-10 justify-items-start w-[60%]"}>
                    <h1 className={"text-8xl font-extrabold"}>Welcome to Nevani! Your Dream Home Awaits!</h1>
                    <p className={"text-4xl mt-3 mb-3"}>Your journey to finding the perfect home starts here.</p>
                    <p className={"content-start"}>Our catalogue will surprise you.Rather discover an unprecedented offers of luxury properties</p>

                    <button className={"rounded-3xl p-4 bg-black text-white font-bold w-fit mt-10"} >catalogue</button>
                </div>
                <div>
                    <img src={"src/assets/image.png"} className={"w-full h-screen object-cover "}/>
                </div>

            </section>
            <section className={"flex w-full justify-center mt-10 content-center "} id={"#property"}>
                <div className={"flex flex-col w-[50%]"}>
                    <h1 className={"text-8xl font-extrabold text-[rgb(0,0,0,0.7)]"}>Find The Best Apartments for you</h1>
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