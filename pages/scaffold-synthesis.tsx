import Head from "next/head";
import Footer from "../components/Footer";

const scaffold_synthesis = () =>{

	const faqsection = [
                        {
                        	"id": "faq1",
                            "title": "What is scaffold synthesis?",
                            "text": "Scaffold synthesis involves foam formation, freezing, drying and cross-linking of lyophilised gel in solution containing cross-linking agent. It also involves foam purification and freeze-drying."
                        },
                        {
                        	"id": "faq2",
                            "title": "What are the different methods used to synthesize scaffolds?",
                            "text": "The different methods used to synthesize scaffolds include 3D printing; gas foaming; rapid prototyping; fabrication; tissue engineering; regeneration; electro spinning and phase generation."
                        },
                        {
                        	"id": "faq3",
                            "title": "What are scaffold limitations?",
                            "text": "Developed scaffolds may exhibit limitations like mechanical failure of materials; immunogenic reactions to implanted materials and material-related infection."
                        },
                        {
                        	"id": "faq4",
                            "title": "How do sterilize scaffolds?",
                            "text": "We initiate scaffold sterilization using ethylene oxide at 41-degrees C for 13 hours with 42% humidity. Other procedures and components can also be used to sterilize scaffolds."
                        },
                        {
                        	"id": "faq5",
                            "title": "How to classify scaffolds?",
                            "text": "The 5 types of scaffolds used across the world are prefabricated modular system scaffold elements; tube and coupler fittings or components; timber scaffolds; bamboo scaffolds and H/frame or façade modular system scaffolds."
                        }

                    ];
	const list1 = [
					{
						"id": 1,
						"data": "Functional scaffold production using cell-based expression systems or cell-free protein synthesis."
					},
					{
						"id": 2,
						"data": "Characterization of resulting conjugates in animal models and tumor cell cultures."
					},
					{
						"id": 3,
						"data": "One-on-one customized drug conjugations."
					}
				];
	const list2 = [
					
					{
						"id": 7,
						"data": "You choose your preferred scaffolds."
					},
					{
						"id": 8,
						"data": "You also choose your preferred compounds"
					},
					{
						"id": 9,
						"data": "And we synthesize everything for you as per your requirements."
					}
				];
    
    return (
    <>
        <Head>
            <title>Scaffold Synthesis Services | Diversitybiosciences.com</title>
            <meta name="description" content="Our high-quality scaffold synthesis services for drug discovery and development. Our expert team utilizes advanced techniques to design and synthesize diverse scaffolds" />
            <meta name="keywords" content="scaffold synthesis, drug discovery, scaffold design, scaffold synthesis services, drug development, diversity-oriented synthesis, diverse scaffolds, research needs, drug discovery process, diversity biosciences" />
      </Head>
        <div className="flex flex-col items-center px-5 px-10 py-5 space-y-10 my-10 page-container" id="aboutus">
            <h1 className="main-heading">Boost Your In-House Collection with the Scaffold Synthesis Services of Diversity Bio Sciences</h1>
            <div>                
                <p>
                As per studies, traditional IgG scaffolds may no longer serve as the right format for targeted payload delivery. That’s why the protein engineering community has now begun to discover alternative, high-binding protein scaffolds in the form of antibody mimics besides using antibody remains as targeting moieties.
                </p>
                <p>Possessing skilled experience in <strong>scaffold synthesis</strong> and design, Diversity Bio Sciences offers all-inclusive scaffold-drug conjugates development solutions for all its customers. We develop different varieties of perfectly engineered scaffolds that can meet your conjugation requirements.</p>
                
            </div>

            <div>
                <h2 className="sub-heading">Our Total Synthesis Services</h2>
                <p>
                We, at Diversity Bio Sciences have been developing antibody-drug conjugates since our inception in 2017. Now, we offer personalized SDC development solutions which include but are not restricted to the following:
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

                <h2>Our Scaffold Synthesis Procedure</h2>
                <p>With our scaffold synthesis service you get to custom synthesis at the cost of stock products. Synthesis of all novel molecules based on scaffolds lets you boost your in-house selection as you want. More robust and faster than waiting for products, our scaffold-based synthesis service keeps you in complete control right from the beginning till the end. Our scaffold synthesis procedure goes like this:</p>

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

                <p>We customize the entire procedure as per your requirements while helping you monitor the same by providing monthly reports. You can even make major or minor adjustments during the procedure.</p>
                <p>With state-of-the-art research facilities, equipped with the most advanced analytic instruments and latest procedures, the scientists at Diversity Bio Sciences possess good experience in concluding successful projects. Due to our wide experience in organic synthesis of scaffolds, we can create exclusive scaffold library projects for drug discovery in our laboratory. </p>
                
                <p>If you are interested in scaffold or total synthesis, do not hesitate to get in touch with us for details. We are available on call at +91 9948872227 or you can even write to us at <a href="mailto:sales@diversitybiosciences.com">sales@diversitybiosciences.com.</a> You can even give us a call at +91 9948872227.</p>
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

export default scaffold_synthesis;