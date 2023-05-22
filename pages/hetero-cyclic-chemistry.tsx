import Head from "next/head";
import Footer from "../components/Footer";

const hetero_cyclic_chemistry = ()=>
{
    
    const faqsection = [
        {
            "id": "faq1",
            "title": "Do you offer FTE or fee-for-service chemistry services?",
            "text": "We are a highly flexible CRO or contract research organization offering both the FFS and FTE business models to suit our client requirements. We offer the best pricing models and fully-integrated solutions."
        },
        {
            "id": "faq2",
            "title": "What are your other value-added services?",
            "text": "Other value-added services at Diversity Bio Sciences include scaffold tuning and modification based on detailed SPR and SAR analysis; diversification and design of scaffolds for maximum physicochemical properties and medicinal chemistry for optimal target design."
        },
        {
            "id": "faq3",
            "title": "What are the different medicinal services you offer?",
            "text": "We offer standalone medicinal chemistry services where we become an extension to your research team and manage activities that can accelerate the delivery of drug discovery programs. Our medicinal chemistry services are available as part of a completely integrated drug discovery service."
        },
        {
            "id": "faq4",
            "title": "What are the different stages of medicinal chemistry?",
            "text": "The different stages of medicinal chemistry include hit to lead; fragment to lead and lead optimization."
        },
        {
            "id": "faq5",
            "title": "What is your main medicinal chemistry focus?",
            "text": "Our main medicinal chemistry focus areas include:"
        }

    ];
const list1 = [
    {
        "id": 1,
        "data": "Synthesis and design of NCEs or Novel Chemical Entities in different drug discovery programs, like hit to lead, target to hit and lead optimization SAR studies.Synthesis and design of NCEs or Novel Chemical Entities in different drug discovery programs, like hit to lead, target to hit and lead optimization SAR studies."
    },
    {
        "id": 2,
        "data": "Biological profiling of all designed compounds."
    },
    {
        "id": 3,
        "data": "Structural directed design in drug discovery programs"
    }
];
const list2 = [
    
    {
        "id": 7,
        "data": "Creativity and quality"
    },
    {
        "id": 8,
        "data": "Sensitive to timelines"
    },
    {
        "id": 9,
        "data": "Dedication to accomplishing client objectives"
    },
    {
        "id": 10,
        "data": "Detailed, clear and timely communication"
    },
    {
        "id": 11,
        "data": "Completely adaptable to changing priorities"
    }
];

    return (
    <>
        <Head>
            <title>Hetero-Cyclic Chemistry | Diversity Bio Sciences.com</title>
            <meta name="description" content="Our team of experts is dedicated to exploring the properties and applications of heterocyclic compounds, with a focus on drug discovery and development" />
            <meta name="keywords" content="hetero-cyclic chemistry, heterocycles, drug discovery, chemical synthesis, chemical properties, drug development, Diversity Bio Sciences" />
      </Head>
        <div className="flex flex-col items-center px-5 px-10 py-5 space-y-10 my-10 page-container" id="aboutus">
            <h1 className="main-heading">Outperform Others with the Medicinal Chemistry Services of Diversity Bio Sciences</h1>
            <div>                
                <p>
                <strong>Medicinal chemistry</strong> involves synthesizing and designing compounds that can be optimized and further used as novel medicines to treat different types of diseases. At Diversity Bio Sciences, we excel in this multidisciplinary field that’s rooted in different basic disciplines, like pharmacology, biology and organic chemistry.
                </p>
                <p>We offer world-class chemistry and drug discovery solutions with the assistance of our state-of-the-art infrastructure and skilled scientists. Collectively, our drug discovery scientists possess good experience in structure-based drug design in different therapeutic areas largely contributing to our fully functional and integrated discovery programs.</p>
                
            </div>

            <div>
                <h2 className="sub-heading">The Exclusiveness of Our Medicinal Chemistry Services</h2>
                <p>
                Our chemistry department provides the following medicinal services:
                </p>
                <ul className="list-disc space-y-3 text-left text-black block px-10 py-2 rounded-md text-1xl font-normal">
                    {list1.map((worklist1) =>{
                
                        return(
                            <li key={worklist1.id}>{worklist1.data}</li>
                        );
                    })
                    }
                </ul>
                <p>
                As a team, we responsibly implement medicinal chemistry solutions comprising the knowledge of our medicinal chemists who possess good training and experience in different disciplines and in assimilating all elements together into a focused drug discovery program.
                </p>
            </div>

            <div>
                <h3 className="sub-heading">Diverse Solutions to Your Hetero Cyclic Chemistry Research Requirements</h3>
                <p>
                With us, you can also avail diverse solutions to all your hetero cyclic research requirements, offering the perfect blend of vigour, innovation, thorough knowledge and expertise in different aspects of drug research and discovery.
                </p>
                <p>We also handle the synthesis and decoration of N-, C- and S-  containing heterocycles; saturated heterocyclic systems with C-N, C-P and C-I bonds and synthesis and derivatizations of fused-hetero cyclic systems.</p>
                <p>We provide flexible business models such as FFS in addition to the common FTE collaboration mode. Additionally, we also provide different mix and match programs, such as chemistry CRO programs.</p>
                <p>
                So, if you want to collaborate with experts well-versed in different aspects of medicinal chemistry assignments, including novel areas, such as steroids and carbohydrates, Diversity Bio Sciences is the destination for you. For more details, email us at <a href="mailto:sales@diversitybiosciences.com">sales@diversitybiosciences.com.</a> or you can even call us at +91 9948872227.
                </p>
            </div>

            <div>
                <h3 className="sub-heading">Frequently Asked Questions (FAQs)</h3>
                {faqsection.map((faqlist) =>{
                
                    return(
                        <div className="faqsection" key={faqlist.id}>
                            <h4>{faqlist.title}</h4>
                            <p>{faqlist.text}</p>

                            { faqlist.id === "faq5" &&
                                <ul>
                                {list2.map((worklist2) =>{
                
                                    return(
                                        <li key={worklist2.id}>{worklist2.data}</li>
                                    );
                                })
                                }
                                </ul>

                            }
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

export default hetero_cyclic_chemistry;