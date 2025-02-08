import "./styles/footer.css"
const Footer =()=>{
    return(
        <footer className={"footer flex items-center w-[80%] m-auto justify-between"}>
            <div className={"flex flex-col gap-5"}>
                <p className={"heading__item font-bold text-3xl"}>Explore</p>
                <p>Homes for rent in Nairobi</p>
                <p>Apartments for rent in Nairobi</p>
                <p></p>
            </div>
            <div className={"flex flex-col gap-5"}>
                <p className={"heading__item  font-bold text-3xl"}>Join us</p>
                <p>Real Estate agents</p>
                <p>Apply to join our developers</p>
                <p></p>
            </div>
            <div className={"flex flex-col gap-5"}>
                <p className={"heading__item  font-bold text-3xl"}>Company</p>
                <p>About Us</p>
                <p>Resource Center</p>
                <p></p>
            </div>
            <div className={"flex flex-col "}>
                <div> Contact support</div>

            </div>
        </footer>
    )
}
export default Footer