

const WelcomePage =()=>{
    return(
        <section className={"home flex gap-2 p-10   w-full h-screen text-black " }>
            <div className={"flex flex-col content-start mt-40 justify-items-start"}>
                <h1 className={"text-8xl font-extrabold"}>Find your Dream Home</h1>
                <p className={"content-start"}>Our catalogue will surprise you.Rather discover an unprecedented offers of luxury properties</p>

                <button className={"rounded-3xl p-4 bg-black text-white font-bold w-fit mt-10"}>catalogue</button>
            </div>
            <div>
                <img src={"src/assets/image.png"} className={"w-full h-screen object-cover mt"}/>
            </div>

        </section>
    )
}
export default WelcomePage