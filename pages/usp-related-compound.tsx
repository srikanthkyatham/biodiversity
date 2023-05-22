import Head from "next/head";
import Footer from "../components/Footer";

const usp_related_compound = () =>{

	const faqsection = [
                        {
                        	"id": "faq1",
                            "title": "What are the impurities in different pharmaceutical preparations?",
                            "text": "Impurities are unwanted chemical substances that are completely different from the chemical composition of different drug substances. They may differ in structure, chemistry and enantiomer."
                        },
                        {
                        	"id": "faq2",
                            "title": "What are the different sources of impurities?",
                            "text": "The different sources of impurities include degradation, manufacturing or synthetic procedures, container, storage conditions, contamination and excipients."
                        },
                        {
                        	"id": "faq3",
                            "title": "What is the significance of testing impurities?",
                            "text": "If impurities are present beyond acceptance limits, they may affect the safety, quality, efficacy and identity of drug products or substances. They may also cause product degradation and lead to serious problems regarding product stability. Therefore, proper quantitative and qualitative impurity testing is crucial."
                        },
                        {
                        	"id": "faq4",
                            "title": "What are reference standards?",
                            "text": "Reference standards are characterized samples of excipients, drug substances, degradation products, reportable impurities and compendial reagents. Scientists use reference standards to regulate qualitative and quantitative data, calibrators and performance standards."
                        },
                        {
                        	"id": "faq5",
                            "title": "How do you test impurities?",
                            "text": "The different methods to test impurities include chromatography, TLC or thin-layer chromatography and HPLC."
                        }

                    ];
	const list1 = [
					{
						"id": 1,
						"data": "Customized chemicals"
					},
					{
						"id": 2,
						"data": "Value added and fully customized synthesis"
					},
					{
						"id": 3,
						"data": "Milligram to kilogram batch synthesis potential"
					},
					{
						"id": 4,
						"data": "Project management and planning"
					},
					{
						"id": 5,
						"data": "Process development and optimization"
					},
					{
						"id": 6,
						"data": "Fully developed analytical and purification potentials"
					}
				];
	const list2 = [
					
					{
						"id": 7,
						"data": "Small and large chemistry potentials"
					},
					{
						"id": 8,
						"data": "Advanced analytical and synthetic platform"
					},
					{
						"id": 9,
						"data": "Synthetic route optimization and design"
					},
					{
						"id": 10,
						"data": "High efficiency and cost-effectiveness"
					}
				];
    
    return (
    <>
        <Head>
            <title>USP-Related Compound Analysis | Diversitybiosciences.com</title>
            <meta name="description" content="DiversityBio offers USP-related compound analysis services to ensure compliance with industry standards. Our expert team utilizes advanced analytical techniques" />
            <meta name="keywords" content="USP-related compound analysis, USP-related compound analysis services, impurity analysis, pharmaceutical analysis, USP standards, diversity biosciences" />
      </Head>
        <div className="flex flex-col items-center px-5 px-10 py-5 space-y-10 my-10 page-container" id="aboutus">
            <h1 className="main-heading">Get the Best API Impurities at Diversity Bio Sciences</h1>
            <div>                
                <p>
                Diversity Bio Sciences manufactures and supplies several <strong>API impurities</strong> needed by the pharmaceutical companies for studying the quality, biological safety and stability of their products. We have several API impurities in stock with CoA or certificate of analysis along with the all-inclusive characterization data, such as HPLC Purity, Mass and 1H-NMR. We are also one of the most well-known manufacturers and suppliers of <strong>USP related compound</strong> and other potential impurities according to requirement or specification.
                </p>
                <p>Besides manufacturing pharmaceutical impurities, we are also active in <strong>reference standards</strong>, custom synthesis and <strong>impurity standards</strong>. We manufacture all impurities using trustworthy scientific procedures, such as organic synthesis, chromatography for isolation and enrichment and degradation.</p>
                
            </div>

            <div>
                <h2 className="sub-heading">Custom Synthesis of Working Standard/Reference Standards</h2>
                <p>We know that impurities in different pharmaceutical products can be a major issue. Therefore, we completely synthesize and characterize required reference standards, working standards, API impurities and R&D Compounds within deadlines.</p>
                <p>
                Our project planning chemists and scientists excel in designing synthetic routes for new and common compounds. Our custom synthesis solutions include synthesis of intermediates, stable isotope labelled analogs, nucleic acid derivatives, building blocks, metabolites, standardized reference compounds and impurities. With us, you can also expect:
                </p>            
                
                <div style={{ "margin": "20px" }}>
                    <ul>
                        {list1.map((worklist1) =>{
                        
                            return(
                            <li key={worklist1.id}>{worklist1.data}</li>
                            );
                        })
                        }
                    </ul>
                </div>                

                <div style={{ "margin": "20px" }}>
                    <p  style={{ "marginBottom": "15px" }}>Our custom synthesis fortes include:</p>
                    <ul>
                        {list2.map((worklist2) =>{
                        
                            return(
                            <li key={worklist2.id}>{worklist2.data}</li>
                            );
                        })
                        }
                    </ul>
                </div>

                <p>Specifically, we give our clients a wide assortment of cooperation models and services, from first-time synthesis of commercially unavailable and complex compounds to the supply of unique chemicals to meet production requirements. We are also one of the most famous and authentic manufacturers and suppliers of the Alprazolam <strong>EP impurity</strong> in India and even abroad.</p>                
                
                <p>Recognizing and eliminating different impurities is the key to successful and safe product commercialization for the pharmaceutical industries. For the best services in this realm, get in touch with our scientists at <a href="mailto:sales@diversitybiosciences.com">sales@diversitybiosciences.com.</a> You can even give us a call at +91 9948872227.</p>
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

export default usp_related_compound;