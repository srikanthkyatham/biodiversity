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
      <h2 className="sub-heading ml-5">Our Services</h2>
      <div className="w-10/12 m-auto shadow-lg shadow-blue-500/50 p-10">
        <Slider
          {...settings}
        >
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl text-left">Our Mission</h2>
                <p className="text-black block py-2 rounded-md text-1xl font-normal text-justify md:text-2xl text-left">
                &quot;Diversity Bio Sciences to be the most trusted global innovation center of innovative solutions for Pharma &amp; Biotech companies, In terms of Drug Development &amp; Custom synthesis”
                </p>
              </div>
              <Image
                src="/services1.jpg"
                alt="Synthetic Chemistry Services"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl text-left">Our Strength</h2>
                <ul className="list-disc space-y-3 text-xl text-left">
                  <li>Custom synthesis of complex organic molecules</li>
                  <li>Pharmaceutical Reference standards</li>
                  <li>Stable isotope label products</li>
                  <li>Drug metabolites &amp; Glucuronides</li>
                  <li>Isolation &amp; Structure elucidation of unknown impurities</li>
                  <li>Competition evaluation of Geno Toxic impurities</li>
                  <li>Contract Research services- Synthesis of intermediates &amp; APl&apos;s </li>
                </ul>
              </div>
              <Image
                src="/services1.jpg"
                alt="Synthetic Chemistry Services"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl text-left">SYNTHETIC CHEMICAL SERVICES</h2>
                <p className="text-black block py-2 rounded-md text-1xl font-normal text-justify md:text-2xl text-left">
                  Experienced chemistry teams work on diversified synthetic routes. Knowledge, experience and chemical  synthesis labs, help to carry out complex custom synthesis and collaborative medicinal chemistry program needs for customers. Quality and timely chemical  sourcing occelerate our programs a step further. The synthetic team is skilled to undertake challenges in synthetic organic chemistry, involving various types of chemistry to deliver compounds to customer requirements. 
                  {'\n'}
                </p>
              </div>
              <Image
                src="/services1.jpg"
                alt="Synthetic Chemistry Services"
                width={300}
                height={300}
                />
            </div>
          </div>
          <div>
            <div className='flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
              <div className="space-y-2">
                <h2 className="font-semibold text-2xl text-left">CUSTOM SYNTHESIS</h2>
                <p className="text-black block py-2 rounded-md text-1xl font-normal text-justify md:text-2xl text-left">
                  Diversity Bio Sciences specialize in offering flexible and cost-effective solutions to its clients globally to meet their  custom organic synthesis requirements. With deep knowledge, experience and infrastructure, our team has extensive analytical and synthetic chemical capabilities in providing a competitive edge to your custom synthesis 
                  needs. 
                </p>
              </div>
              <Image
                src="/services1.jpg"
                alt="Synthetic Chemistry Services"
                width={300}
                height={300}
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default LatestProducts