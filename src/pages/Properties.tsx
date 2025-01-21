import SearchIcon from '@mui/icons-material/Search';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import {useState} from "react";
import Button from "../components/Button.tsx";
const Properties =()=>{
    const[location,setLocation] =useState<string>("Default")
    const[filters,setFilters] =useState<number>(0)
    const[bathrooms,setBathrooms] =useState<number>(0)
    const[bedrooms,setBedrooms] =useState<number>(0)
    const[property,setProperty] =useState<string[]>()
    return(
        <div className={"flex"}>
            <div className={"w-[75%] p-10 bg-white text-black h-screen flex flex-col mt-12 rounded-2xl"}>
                <form onSubmit={(e)=>e.preventDefault()} className={"flex justify-center align-middle gap-5 w-full "}>
                    <div className={"flex rounded-full  border-black border-2 "}>
                        <div className={"ml-3 mt-3"}><SearchIcon/></div>
                        <input type={"text"} placeholder={"Enter location"} className={"ml-2 p-3 active:outline-0 "} onChange={(e)=>setLocation(e.target.value)}/>
                        <div className={" ml-3 w-52 border-l-4 "}>{location}</div>
                    </div>
                    <div className={"text-black font-bold"}>filters {filters}</div>
                    <button type={"submit"} className={"rounded-xl text-white bg-black pl-5 pe-5 pt-2 pb-2 ml-3"}>Search</button>
                </form>
                <div >
                    <p>fjibgrijb</p>
                </div>
                <div >
                    <p>fjibgrijb</p>
                </div>
                <div >
                    <p>fjibgrijb</p>
                </div>
                <div >
                    <p>fjibgrijb</p>
                </div>
                <div >
                    <p>fjibgrijb</p>
                </div>
                <div >
                    <p>fjibgrijb</p>
                </div>
            </div>
            <aside className={"h-[50%] w-[25%] bg-white mt-12 ml-2.5 p-6 flex flex-col rounded-xl"}>
                {/*bg-[#AEE4F9]*/}
                <h1 className={"text-2xl font-bold"}>Filter Properties</h1>
                <div className={"flex mt-4 gap-2"}>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>All</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>House</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>Apartments</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>Rentals</button>
                    <button className={"border-black border-2 rounded-xl pt-2 pe-5 pl-2 pb-2 "}>Sale</button>
                </div>
                <div className={"flex mt-8 gap-2"}>
                    <LocalHotelIcon/>
                    <Button label={1} />
                    <Button label={2} />
                    <Button label={3} />
                    <Button label={4} />
                    <Button label={5} />
                    <Button label={6} />
                </div>
                <div className={"flex mt-6 gap-2"}>
                    <BathtubIcon/>
                    <Button label={1} />
                    <Button label={2} />
                    <Button label={3} />
                    <Button label={4} />
                    <Button label={5} />
                    <Button label={6} />
                </div>
                <div className={"flex mt-6 gap-2 flex-col"}>
                    <h1>Furnished</h1>
                    <div>

                        <label>True</label>

                        <label>False</label>



                    </div>
                </div>
                <div className={"flex mt-6 gap-2 "}>
                    <h1>Parking</h1>
                    <div className={"flex"}>
                        <fieldset>
                            <label>True</label>
                            <input type={"radio" } value={"true"} name={"true"}/>
                            <label>False</label>
                            <input type={"radio"} value={"false"} name={"false"}/>
                        </fieldset>
                    </div>
                </div>

                <button className={"mt-12 rounded-3xl text-white pt-2 pb-2 pl-3 pe-3 bg-black"}>Search</button>
            </aside>
        </div>


    )
}
export default Properties