import {aboutInfo} from "./AboutInfo.ts"
import AboutCard from "../components/AboutCard.tsx";
import "./styles/aboutPage.css"

const About =()=>{
    return(
        <div className={"about__container p-20 content-center justify-center text-black flex flex-col bg-[whitesmoke] w-full"}>
            <section className={"about__us flex-col flex w-[50%] ml-[5%] justify-center content-center text-2xl mb-9"}>
                <h1 className={"font-extrabold text-4xl mb-6 text-[#ff914d]"}>About Us</h1>
                <p className={"leading-10"}>At Nevani, we understand that house hunting can be overwhelming.
                    The process of finding the perfect home involves numerous decisions, from choosing the right neighborhood
                    to navigating financing options. That’s why we’re dedicated to simplifying the process for you.
                    Our platform offers a wealth of resources designed to empower you in your search for the ideal property.
                </p>
            </section>
            <section className={"why__choose_us flex flex-col ml-20" }>
                <h1 className={"font-extrabold text-4xl text-[#ff914d]"}>Why Choose Us?</h1>
                <div className={"flex flex-wrap gap-3 mt-10 leading-9 "}>
                    {aboutInfo.map(({title,content})=>(
                        <AboutCard title={title} content={content}/>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default About