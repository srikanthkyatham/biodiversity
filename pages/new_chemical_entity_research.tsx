import Footer from "../components/Footer";

const new_chemical_entity_research = () =>
{
    
    const faqsection = [
        {
            "id": "faq1",
            "title": "What is NCE or New Chemical Entity?",
            "text": "NCE or New Chemical Entity is a compound or drug that has never been approved by the FDA or other regulatory agencies for use by humans."
        },
        {
            "id": "faq2",
            "title": "What do you mean by NCE research?",
            "text": "It is the procedure of discovering and designing new chemical compounds with therapeutic advantages. Through NCE research, we recognize a target biological or molecule pathway for a condition or disease and then develop and synthesize chemical compounds to react with that target and produce required therapeutic effect."
        },
        {
            "id": "faq3",
            "title": "What are a few examples of New Chemical Entities?",
            "text": "Some examples of New Chemical Entities include Palbociclib, Ibrutinib, Lensvatinib, Durvalumab, Pembrolizumab, Guselkumab, Lenvatinib, Vemurafenib and Lasmiditan."
        },
        {
            "id": "faq4",
            "title": "What are the challenges of taking up NCE research?",
            "text": "NCE research is an expensive and long procedure wherein we test and synthesize millions of compounds to identify the safest and most effective. Also, there are strict regulatory requirements for examination and approval of NCEs."
        },
        {
            "id": "faq5",
            "title": "What are the different ways to discover NCEs?",
            "text": "Different ways to discover NCEs include computer-aided drug design; high-throughput screening and natural product extraction."
        }

    ];
const list1 = [
    {
        "id": 1,
        "data": "Virtual screening and library generation"
    },
    {
        "id": 2,
        "data": "Computational discovery research"
    },
    {
        "id": 3,
        "data": "Complete application filing"
    },
    {
        "id": 4,
        "data": "Custom chemical synthesis of small molecules"
    },
    {
        "id": 5,
        "data": "Patent filing and novelty search"
    },
    {
        "id": 6,
        "data": "Process development"
    },
    {
        "id": 7,
        "data": "Lead optimization"
    }
];


    return (
    <>
        <div className="flex flex-col items-center px-5 px-10 py-5 space-y-10 my-10 page-container" id="aboutus">
            <h1 className="main-heading">Increase Clients with New Chemical Entity (NCE) Research Services of Diversity Bio Sciences</h1>
            <div>                
                <p>
                At Diversity Bio Sciences, we possess extensive experience and a significant track record in discovery research serving the requirements of different industry sectors, like chemical, health, pharmaceutical, food and even beauty care. We can easily augment your candidate pipeline through <strong>New Chemical Entity (NCE) research</strong> for all intended purposes.
                </p>
                
            </div>

            <div>
                <h2 className="sub-heading">Our Work-Flow Coverage</h2>
                <p>
                Based on the requirements of the project, we cover an entire workflow to transform an idea into useful intellectual property. We cover different work-flows for the pharmaceutical industries, with good scope of engagement with customers. Our work-flow coverage includes:
                </p>
                <ul>
                    {list1.map((worklist1) =>{
                
                        return(
                            <li key={worklist1.id}>{worklist1.data}</li>
                        );
                    })
                    }
                </ul>
                
            </div>

            <div>
                <h2 className="sub-heading">Fetch Maximum Results with Diversity Bio Sciences</h2>
                <p>
                Our NCE research continues to recognize new targets for small molecules, often known as NCE or New Chemical Entity. The unusual speed of the development of large molecules, like monoclonal antibodies and various other proteins has actually distracted attention from the continuing progress that should be made in NCE research. It is expensive to make large molecules and they also need to be given parenterally. Therefore, they have limited use in the treatment of chronic diseases. On the other hand, small molecules are administered orally which is convenient for all patients. At Diversity Bio Sciences, we constantly indulge in NCE research for assessments in humans.
                </p>
                <p>NCE research still accounts for much of the work at Diversity Bio Sciences. Our senior physicians and scientists take up human trials of NCE offering unequalled experience in this field. Our long-term association with NCE research has helped us gain exceptional expertise in pharmacokinetic data interpretation. Our medical experience and the expertise of our team also mean we can understand the pharmacology and toxicology of unfamiliar and exotic NCE quickly.</p>
                
                <p>
                Connect with the experts at Diversity Bio Sciences to know more about our NCE research services and how our expert clinical project managers and physicians can help you. You can call us at +91 9948872227 or write to us at <a href="mailto:sales@diversitybiosciences.com">sales@diversitybiosciences.com.</a>.
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

export default new_chemical_entity_research;