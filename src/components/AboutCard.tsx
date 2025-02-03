interface AboutCardProps{
    title:string,
    content:string
}
const AboutCard =({title,content}:AboutCardProps)=>{
    return(
        <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
            <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>{title}</h2>
            <p >{content}</p>
        </div>
    )

}
export default AboutCard