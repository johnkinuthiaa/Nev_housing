const ContactPage =()=>{
    return(
        <div className={"p-3 flex flex-col content-center justify-center w-[80%]"}>
           <h1>Contact our team</h1>
            <p>Got any questions about the products or our platform in general?
                We're here to help.Contact our friendly team 24/7 and get onboard in less than 5 minutes
            </p>
            <div className={"flex mt-4"}>
                <form className={"flex flex-col w-[20%]"} onSubmit={(e)=>{
                    e.preventDefault()
                }}>
                    <div className={"flex gap-5 w-[100%]"}>
                        <div className={""}>
                            <label >First name</label>
                            <input type={"text"} placeholder={"First name"} className={"border border-gray-600 rounded-2xl p-2 "}/>
                        </div>
                        <div>
                            <label >Last name</label>
                            <input type={"text"} className={"border border-gray-600 rounded-1xl p-2 "} placeholder={"Last name"}/>
                        </div>
                    </div>
                    <label>Email</label>
                    <input type={"email"} placeholder={"Email"} className={" border border-gray-600 rounded-2xl p-2 "} />
                    <label>Phone Number</label>
                    <input type={"tel"} placeholder={"+2547...,07..."} className={"border border-gray-600 rounded-2xl p-2 "} />
                    <label>Message</label>
                    <textarea placeholder={"Leave us a message"} className={"border border-gray-600 rounded-2xl p-2 h-40 w-full "} ></textarea>
                    <button type={"submit"}>Send message</button>
                </form>
                <div>

                </div>
            </div>
        </div>
    )
}
export default ContactPage