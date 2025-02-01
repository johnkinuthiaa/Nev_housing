const ContactPage =()=>{
    return(
        <div className={"p-3 flex flex-col content-center justify-center w-[40%] m-auto leading-8 "}>
           <p className={"font-bold text-4xl mt-4"}>Contact our team</p>
            <p className={"break-word mt-2"}>Got any questions about the products or our platform in general?
                We're here to help.Contact our friendly team 24/7 and get onboard in less than 5 minutes
            </p>
            <div className={"flex mt-4"}>
                <form className={"flex flex-col w-fit"} onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <div className={"flex gap-2 "}>
                        <input type={"text"} placeholder={"First name"} className={"border border-gray-600 rounded-2xl p-2 mt-4"}/>
                        <input type={"text"} className={"border border-gray-600 rounded-2xl p-2 mt-4 "} placeholder={"Last name"} required={true}/>

                    </div>
                    <label className={"mt-4"}>Email</label>
                    <input type={"email"} placeholder={"Email"} className={" border border-gray-600 rounded-2xl p-2"} required={true} />
                    <label className={"mt-4"}>Phone Number</label>
                    <input type={"tel"} placeholder={"+2547..."} className={"border border-gray-600 rounded-2xl p-2 "} required={true}/>
                    <label className={"mt-4"}>Message</label>
                    <textarea placeholder={"Leave us a message"} className={"border border-gray-600 rounded-2xl p-2 h-40 w-full resize-none"} required={true}></textarea>
                    <button type={"submit"} className={"p-4 bg-black font-bold text-white w-fit mt-10 rounded-2xl "}>Send message</button>
                </form>
                <div>

                </div>
            </div>
        </div>
    )
}
export default ContactPage