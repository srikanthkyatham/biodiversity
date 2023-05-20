import Footer from "../components/Footer";

const contract_development_and_manufacturing_organization = () =>
{
    const faqsection = [
        {
            "id": "faq1",
            "title": "Is contract research and custom synthesis a service only meant for the large pharmaceutical companies?",
            "text": "No, not at all. Such services are not meant for any individual industry or a set group of customers. As a CRO, Diversity Bio Sciences serves pharmaceutical companies of all sizes without differentiating between varied customer branches."
        },
        {
            "id": "faq2",
            "title": "How can I benefit from outsourcing research activities to Diversity Bio Sciences?",
            "text": "Outsourcing research activities to us means major improvement in product development. Other benefits of our services include saved costs, time and resources."
        },
        {
            "id": "faq3",
            "title": "What to look for in a CRO?",
            "text": "Things to look out for in a CRO include key competence, size, location, communication, trust, financial stability, track record and different certifications. Diversity Bio Sciences excels in all these fields."
        },
        {
            "id": "faq4",
            "title": "What are the benefits of contract manufacturing?",
            "text": "Several benefits of contract manufacturing include production cost minimization; more focus on sales efforts; superior quality products and easy market entry."
        },
        {
            "id": "faq5",
            "title": "Will you give me all the information about the progress of my synthesis project?",
            "text": "Yes, with Diversity Bio Sciences, you will get all updates about the progress of your synthesis assignment on a regular basis."
        }

    ];
const list1 = [
    {
        "id": 1,
        "data": "We have the expertise and resources necessary to address different development stages that occur before the drug manufacturing stage."
    },
    {
        "id": 2,
        "data": "Our team possesses the potential to handle the design, production and examination stages of early drug creation."
    },
    {
        "id": 3,
        "data": "Outsourcing your drug manufacturing tasks to Diversity Bio Sciences will give you access to cutting-edge resources and technology without investing a huge amount of money and time towards developing the right in-house infrastructure."
    }
];
    
    return (
    <>
        <div className="flex flex-col items-center px-5 px-10 py-5 space-y-10 my-10 page-container" id="aboutus">
            <h1 className="main-heading">Diversity Bio Sciences: The Ultimate Contract Research Organization (CRO) Offering Specialty Services</h1>
            <div>
                
                <p>
                Are you looking for the right supplier for custom synthesis of new products? If yes, come straight to Diversity Bio Sciences, a Contract Research Organization (CRO) in Hyderabad that deals in the exclusive synthesis of compounds on behalf of its clients. With us, you can order a certain molecule to be synthesized according to your request, specifications, methods and purities.
                </p>
                <p>
                We have a completely developed, superior quality pharmaceutical impurity standards infrastructure for small-scale custom synthesis of completely new molecules. We enable the outsourcing of different research activities, ranging from the custom synthesis of small molecules, scaffold and drug impurities to the synthesis of intermediates to support on-going medicinal chemistry programs. With our epistemic potentials and skills, we manifest changes in commercial research cultures.
                </p>
            </div>

            <div>
                <h2 className="sub-heading">Full-Service CDMO Also Offering Contract Research and Manufacturing Services</h2>
                <p>
                We are a full-service; IAF, EGAC, ISO and QRO certified Contract Development and Manufacturing Organization (CDMO) engaged in the production of thousands of tons of fine chemicals on multi-purpose plants. Our specialties include:
                </p>
                <ul className="list-disc space-y-3 text-left text-black block px-10 py-2 rounded-md text-1xl font-normal">
                    {list1.map((worklist1) =>{
                
                        return(
                            <li key={worklist1.id}>{worklist1.data}</li>
                        );
                    })
                    }
                </ul>
            </div>

            <div>
                <h2 className="sub-heading">Diversity Bio Sciences: Manufacturing Pharmaceuticals While Ensuring Success, Safety and Compliance</h2>
                <p>
                Serving as the reliable partner for several generic companies and leading innovators and having a proven track record on chemical process development & manufacturing, we have also ventured into Contract Research and Manufacturing Services (CRAMS). With unwavering dedication to state-of-the-art and quality research; intellectual and regulatory property expertise and universal manufacturing potentials, we are all set to support and speed up the manufacturing and manufacturing programs of several innovator companies.
                </p>
                <p>
                At Diversity Bio Sciences, our 6 years of experience is judiciously employed to generate commercially viable, top quality, scalable and affordable procedures for all our partners. Want to experience our world-class scientific infrastructure and community? Get in touch with us at +91 9948872227 or mail us at <a href="mailto:sales@diversitybiosciences.com">sales@diversitybiosciences.com.</a>.
                </p>
            </div>

            <div>
                <h3 className="sub-heading">Frequently Asked Questions (FAQs)</h3>
                {faqsection.map((faqlist) =>{
                
                    return(
                    <div className="faqsection" key={faqlist.id}>
                        <h4>{faqlist.title}</h4>
                        <p>{faqlist.text}</p>
                    </div>        
                    );
                })
                }                
                
            </div>

            
        </div>
        <Footer />
    </>
    );
}

export default contract_development_and_manufacturing_organization;