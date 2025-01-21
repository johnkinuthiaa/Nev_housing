

interface ButtonProps{
    label:number

}

const Button=({label}:ButtonProps)=>{
    return(
        <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2"}>{label}</button>
    )
}
export default Button