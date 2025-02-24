import { useState } from "react"
import "./styles/contact.css"

const ContactPage =()=>{
    const [firstName,setFirstName] =useState<string>("")
    const [lastName,setLastName] =useState<string>("")
    const [email,setEmail] =useState<string>("")
    const [message,setMessage] =useState<string>("")
    const [mobileNumber,setMobileNumber] =useState<string>("")
    const SEND_EMAIL_URL =`https://nev-backend-migration.onrender.com/mail/send?firstName=${firstName}&lastName=${lastName}&email=${email}&message=${message}&mobileNumber=${mobileNumber}`

    const sendEmail =(async()=>{
        const response =await fetch(SEND_EMAIL_URL,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            }
        })
        if(response.ok){
            const data =await response.json()
            if(data.statusCode ===200){
                console.log("mail sent")
                setTimeout(()=>{
                    setMessage("")
                    setMobileNumber(" ")
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                },2000)
            }else{
                console.log(data.message)
            }
        }
    })
    return(
        <div className={"contact__page p-3 flex flex-col content-center justify-center w-[30%] m-auto leading-8 mt-2 "}>
           <p className={"font-bold text-4xl mt-4 text-[#5271ff]"}>Contact our team</p>
            <p className={"contact__info break-word w-[80%] mt-2 text-xl"}>Got any questions about the products or our platform in general?
                We're here to help.Contact our friendly team 24/7 and get onboard in less than 5 minutes
            </p>
            <div className={"flex mt-4"}>
                <form className={"flex flex-col "} onSubmit={(e)=>{
                    e.preventDefault()
                    sendEmail()
                }}>
                    <div className={"form_names__holder flex gap-2 "}>
                        <input type={"text"} placeholder={"First name"} className={"border border-gray-600 rounded-2xl p-1 mt-4"} required={true} onChange={(e)=>setFirstName(e.target.value)}/>
                        <input type={"text"} className={"border border-gray-600 rounded-2xl p-1 mt-4 "} placeholder={"Last name"} required={true} onChange={(e)=>setLastName(e.target.value)}/>

                    </div>
                    <label className={"mt-4"}>Email</label>
                    <input type={"email"} placeholder={"Email"} className={" border border-gray-600 rounded-2xl p-1"} required={true} onChange={(e)=>setEmail(e.target.value)}/>
                    <label className={"mt-4"}>Phone Number</label>
                    <input type={"tel"} placeholder={"+2547..."} className={"border border-gray-600 rounded-2xl p-1 "} required={true} onChange={(e)=>setMobileNumber(e.target.value)}/>
                    <label className={"mt-4"}>Message</label>
                    <textarea placeholder={"Leave us a message"} className={"border border-gray-600 rounded-2xl p-1 h-52 w-full resize-none"} required={true} onChange={(e)=>setMessage(e.target.value)}>I’d like to ask a question about homes in Nairobi</textarea>
                    <button type={"submit"} className={"p-2 bg-black font-bold text-white w-fit mt-10 rounded-2xl "} onClick={()=>{

                    }}>Send message</button>
                </form>
                <div>

                </div>
            </div>
        </div>
    )
}
export default ContactPage