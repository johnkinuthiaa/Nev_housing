import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Faqs =()=>{
    return(
        <div className={"faqs flex flex-col w-[50%] rounded-3xl shadow-2xl content-center justify-center ml-[25%] mt-10 scroll-smooth"}>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span" >What services does Nevani Housing offer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    We provide a comprehensive platform for house hunting, including personalized property searches, curated listings, expert articles, market insights, and resources to guide you through the buying or renting process.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel2-header"
                >
                    <Typography component="span"> How do I start my property search?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Simply visit our Properties and use the search bar to enter your desired location, price range, and any specific features you’re looking for. You can also browse our featured listings for inspiration.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel3-header"
                >
                    <Typography component="span">Do I need to create an account to use the website?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    No, you can browse listings without an account. However, creating an account allows you to save your favorite properties, receive personalized alerts, and access additional resources tailored to your needs.

                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel4-header"
                >
                    <Typography component="span">How often are the property listings updated?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Our listings are updated in real-time to ensure you have access to the most current information. We strive to provide the latest properties as soon as they become available.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel5-header"
                >
                    <Typography component="span">Can I get assistance from a real estate agent through your platform?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Yes! We can connect you with experienced real estate agents who can provide personalized assistance throughout your home-buying journey. Simply fill out our contact form, and we’ll match you with a local expert.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel6-header"
                >
                    <Typography component="span"> Do you provide resources for first-time homebuyers?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Absolutely! We offer a variety of articles, guides, and checklists specifically designed for first-time homebuyers. These resources cover essential topics such as financing, home inspections, and the buying process.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel7-header"
                >
                    <Typography component="span">How can I stay updated on new listings?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    You can sign up for our newsletter to receive regular updates on new listings, market trends, and expert tips. Additionally, you can set up alerts for specific criteria to be notified when properties that match your preferences become available.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel8-header"
                >
                    <Typography component="span">What if I have questions about a specific property?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    If you have questions about a specific property, you can contact us directly through the listing page. We’ll connect you with the appropriate resources or provide the information you need.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel9-header"
                >
                    <Typography component="span">Is there a fee to use your services?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Our platform is free to use for homebuyers and renters. We may earn a commission from real estate agents or listings, but there are no fees for users accessing our resources or listings.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">How do I contact customer support?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    You can reach our customer support team through the “Contact Us” page on our website. We’re here to help with any questions or concerns you may have.
                </AccordionDetails>
            </Accordion>

        </div>
    )
}
export default Faqs