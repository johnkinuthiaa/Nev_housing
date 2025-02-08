import * as motion from "motion/react-client"
interface AboutCardProps{
    title:string,
    content:string
}
const AboutCard =({title,content}:AboutCardProps)=>{
    return(
        <motion.div className={"about__card flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
        >
            <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>{title}</h2>
            <p >{content}</p>
        </motion.div>
    )

}
export default AboutCard