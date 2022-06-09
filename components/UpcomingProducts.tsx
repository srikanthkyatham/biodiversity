/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Image from "next/image";

const LatestProducts = () => {

  const settings = {
    dots: true,
    slidesToShow: 1
  }

  return (
    <div className="my-14 text-center" id="services">
      <h2 className="text-3xl ml-5">Our Services</h2>
      <div className="w-10/12 m-auto shadow-lg shadow-blue-500/50 p-10">
        <Slider
          {...settings}
        >
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl">Our Mission</h2>
                <p className="text-gray text-sm description-text text-xl">
                &quot;Diversity Bio Sciences to be the most trusted global innovation center of innovative solutions for Pharma &amp; Biotech companies, In terms of Drug Development &amp; Custom synthesis”
                </p>
              </div>
              <img
                src="/services1.jpg"
                alt="Synthetic Chemistry Services"
                style={{ width: 250, height: 250 }}
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl">SYNTHETIC CHEMICAL SERVICES</h2>
                <p className="text-gray text-sm description-text text-xl">
                  Experienced chemistry teams work on diversified synthetic routes. Knowledge, experience and chemical  synthesis labs, help to carry out complex custom synthesis and collaborative medicinal chemistry program needs for customers. Quality and timely chemical  sourcing occelerate our programs a step further. The synthetic team is skilled to undertake challenges in synthetic organic chemistry, involving various types of chemistry to deliver compounds to customer requirements. 
                  {'\n'}
                </p>
                <p>Our multidisciplinary scientific team led by domain experts has helped our clients in successful & timely project submissions. </p>
              </div>
              <img
                src="/services1.jpg"
                alt="Synthetic Chemistry Services"
                style={{ width: 250, height: 250 }}
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl">CUSTOM SYNTHESIS</h2>
                <p className="text-gray text-sm description-text text-xl">
                  Diversity Bio Sciences specialize in offering flexible and cost-effective solutions to its clients globally to meet their  custom organic synthesis requirements. With deep knowledge, experience and infrastructure, our team has extensive analytical and synthetic chemical capabilities in providing a competitive edge to your custom synthesis 
                  needs. 
                </p>
              </div>
              <img
                src="/services2.jpg"
                alt="Custom Synthesis"
                style={{ width: 250, height: 250 }}
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl">OUR SERVICES</h2>
                <ul className="list-disc space-y-3 text-xl">
                  <li>Custom synthesis of complex organic molecules</li>
                  <li>Pharmaceutical Reference standards</li>
                  <li>Stable isotope label products</li>
                  <li>Drug metabolites &amp; Glucuronides</li>
                  <li>Isolation &amp; Structure elucidation of unknown impurities</li>
                  <li>Competition evaluation of Geno Toxic impurities</li>
                  <li>Contract Research services- Synthesis of intermediates &amp; APl&apos;s </li>
                </ul>
              </div>
              <img
                src="/services3.jpg"
                alt="Our Services"
                style={{ width: 250, height: 250 }}
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default LatestProducts