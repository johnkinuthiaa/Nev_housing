import Faqs from "./Faqs.tsx";

const About =()=>{
    return(
        <div className={"about p-20 content-center justify-center text-black flex flex-col bg-[whitesmoke] w-full"}>
            <section className={"flex-col flex w-[50%] ml-[30%] justify-center content-center text-2xl mb-9"}>
                <h1 className={"font-extrabold text-4xl mb-6 text-[#ff914d]"}>About Us</h1>
                <p>At Nevani, we understand that house hunting can be overwhelming.
                    The process of finding the perfect home involves numerous decisions, from choosing the right neighborhood
                    to navigating financing options. That’s why we’re dedicated to simplifying the process for you.
                    Our platform offers a wealth of resources designed to empower you in your search for the ideal property.
                </p>
            </section>
            <section className={"flex flex-col ml-20" }>
                <h1 className={"font-extrabold text-4xl text-[#ff914d]"}>Why Choose Us?</h1>
                <div className={"flex flex-wrap gap-3 mt-10 leading-9 "}>
                    <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>User -Friendly Search Tools</h2>
                        <p>Our intuitive search interface allows you to filter properties based on your specific needs and preferences.
                            Whether you’re looking for a cozy apartment in the city or a spacious family home in the suburbs,
                            our advanced search options make it easy to find listings that match your criteria.
                        </p>
                    </div>
                    <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>Comprehensive Listings</h2>
                        <p>We curate a diverse range of properties, ensuring you have access to the latest listings in your desired area. Each property profile includes detailed descriptions, high-quality images, and essential information about the neighborhood, schools, and amenities.
                        </p>
                    </div>
                    <div className={"flex flex-col w-[500px] bg-white p-2 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>Expert Insights and Resources:</h2>
                        <p>Our team of real estate professionals is committed to providing you with the knowledge you need to make informed decisions. Explore our extensive library of articles, guides, and tips covering everything from market trends to home-buying strategies. We also offer advice on financing options, home inspections, and negotiation tactics to help you navigate the complexities of real estate.
                        </p>
                    </div>
                    <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>Personalized Support</h2>
                        <p>
                            We believe that every homebuyer deserves personalized attention. Our dedicated support team is here to answer your questions, provide guidance, and assist you throughout your journey. Whether you need help understanding the buying process or want recommendations for local service providers, we’re just a message away.
                        </p>
                    </div>
                    <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>User -Friendly Search Tools</h2>
                        <p>Our intuitive search interface allows you to filter properties based on your specific needs and preferences.
                            Whether you’re looking for a cozy apartment in the city or a spacious family home in the suburbs,
                            our advanced search options make it easy to find listings that match your criteria.
                        </p>
                    </div>
                    <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>Community Connection</h2>
                        <p>
                            Join a community of like-minded individuals who are also on their house-hunting journey. Share experiences, ask questions, and gain insights from others who have successfully navigated the real estate market. Our platform fosters a supportive environment where you can feel confident in your decisions.
                        </p>
                    </div>
                    <div className={"flex flex-col w-[500px] bg-white p-5 rounded-3xl h-[400px] text-2xl text-gray-700"}>
                        <h2 className={"font-bold text-2xl mb-2 text-[#5271ff]"}>Stay Updated:</h2>
                        <p>
                            Sign up for our newsletter to receive the latest listings, market updates, and expert tips directly in your inbox. With our timely alerts, you’ll never miss out on a property that could be your future home.
                        </p>
                    </div>

                </div>
            </section>
            {/*<section>*/}
            {/*    <div>*/}
            {/*        <p>At [Your Website Name], we are passionate about helping you find not just a house, but a place you can truly call home. We invite you to explore our platform, utilize our resources, and embark on this exciting journey with us. Together, we’ll turn your dream of homeownership into a reality.</p>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section>
                <Faqs />
            </section>

        </div>
    )
}
export default About