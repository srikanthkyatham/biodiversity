import Head from "next/head";
import Footer from "../components/Footer";

const custom_synthesis_of_intermediates_api = () =>
{

    const faqsection = [
        {
            "id": "faq1",
            "title": "What is the significance of custom synthesis of intermediates & APIs?",
            "text": "Custom synthesis of intermediates & APIs is critical in the manufacture of chemical compounds for active pharmaceutical ingredients. This procedure helps industries endure the complicated and lengthy clinical trial procedure while accelerating their drugs to the market."
        },
        {
            "id": "faq2",
            "title": "What is chemical synthesis?",
            "text": "Chemical synthesis is an important procedure where chemists perform a number of multi-step chemical reactions. Main objective of this procedure is converting starting materials or reactants into diverse products."
        },
        {
            "id": "faq3",
            "title": "What is the significance of chemical synthesis?",
            "text": "Custom chemical synthesis has huge significance in drug discovery and development. The chemists working within the contract laboratories choose molecules or make compounds for customers to meet their specifications."
        },
        {
            "id": "faq4",
            "title": "What is contract chemistry?",
            "text": "Ans. Contract chemistry involves custom synthesis solutions for scientific research and development assignments- specifically pharmaceuticals. The procedure is a unique agreement between the customer and provider to synthesize intermediates, small molecules and reference compounds."
        },
        {
            "id": "faq5",
            "title": "What are the benefits of custom synthesis of intermediates and APIs?",
            "text": "Pharmaceutical companies that do not have their own, in-house chemistry facilities or labs can greatly benefit from the custom synthesis of intermediates and APIs. With the services of a contract manufacturer like Diversity Bio Sciences for custom compounds they can finalize precise details; adjust required changes and perfect the product before final manufacture."
        }

    ];

    
    return (
    <>
        <Head>
            <title>Custom Synthesis of Intermediates & API | Diversity BioSciences</title>
            <meta name="description" content="We offer custom synthesis of intermediates and APIs for pharmaceutical companies. Our experts specialize in organic synthesis, delivering high-quality products" />
            <meta name="keywords" content="Custom synthesis of intermediates & API’s, Active pharmaceutical ingredient (API), custom synthesis, intermediates API, pharmaceutical, organic synthesis, high-quality products, Diversity BioSciences" />
      </Head>
        <div className="flex flex-col items-center px-5 px-10 py-5 space-y-10 my-10 page-container" id="aboutus">
            <h1 className="main-heading">Diversity Bio Sciences: Delivering Sustained Growth through Custom Synthesis of Intermediates & API’s</h1>
            <div>                
                <p>
                Diversity Bio Sciences is a Custom Research Organization that offers the global pharmaceutical and bio-tech community a completely new and refreshing approach for the outsourcing of chemistry services with the focus on boosting value for the clients. Our customer-centered, project-based chemistry services simplify the outsourcing experience of our clients. Added to that is our exemplary customer service that ensures accountability, reliability and transparency in terms of delivery and cost. We consider every project as a privilege with our team compromising on nothing to offer an unparalleled and efficient outsourcing experience.
                </p>
                <p>We possess more than 6 years of experience in serving not just the Indian market but even the markets in USA, UK, Germany and New Zealand. Through our modern manufacturing and development facilities along with a responsible team of scientists, chemists, manufacturing personnel, R&D and project managers, we offer all-inclusive outsourcing options in all registered active pharmaceutical ingredient (API), starting materials and intermediates.</p>
                
            </div>

            <div>
                <h2 className="sub-heading">Contract Manufacturing: Get in Touch With Us!</h2>
                <p>
                If you are looking for the best provider for custom synthesis of intermediates & API’s, get straight to Diversity Bio Sciences. With us, you will get custom organic synthesis services of intermediates and APIs. We collaborate with our clients closely to design USP related compounds that meet their requirements. With EGAC, IAF, ISO and QRO accreditations, we are one of the most reliable contract development and manufacturing (CDMO) organizations serving the industry. We hold a specialized niche in all products meant for early and preclinical phase trials with 99% success rate.
                </p>
                <p>Our team of experienced manufacturing personnel and chemists is always ready to carry out fully-diversified chemical reactions and procedures to help you accomplish your custom synthesis objectives. Regardless of the data objectives of your study, we look forward to work with all kinds of clients. With us, you get a fully organized campaign that meets regulatory requirements and grabs success in the long run.</p>
                <p>Get in touch with us today to learn more about our chemical procedures; state-of-the-art facility and tools. You can call us at +91 9948872227 or send us an email at <a href="mailto:sales@diversitybiosciences.com">sales@diversitybiosciences.com.</a>.</p>
                
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

export default custom_synthesis_of_intermediates_api;