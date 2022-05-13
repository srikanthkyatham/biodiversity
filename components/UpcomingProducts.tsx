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
    <div className="my-14" id="services">
      <div className="w-10/12 m-auto shadow-lg shadow-blue-500/50 p-10">
        <Slider
          {...settings}
        >
          <div className='!flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
            <div>
              <h2 className="font-semibold description-text">Why choose bio diversity sciences?</h2>
              <p className="text-gray text-sm description-text">
                Diversity about real world scenario for the projects maintaining about the pharameutical products which are 100% natural and no.1 products in the
                entire country of the world of the earth
              </p>
            </div>
            <Image
              className=""
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className='!flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
            <div>
              <h2 className="font-semibold description-text">Why choose bio diversity sciences?</h2>
              <p className="text-gray text-sm description-text">
                Diversity about real world scenario for the projects maintaining about the pharameutical products which are 100% natural and no.1 products in the
                entire country of the world of the earth
              </p>
            </div>
            <Image
              className=""
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className='!flex flex-col items-center px-5 py-10 justify-between md:flex-row'>
            <div>
              <h2 className="font-semibold description-text">Why choose bio diversity sciences?</h2>
              <p className="text-gray text-sm description-text">
                Diversity about real world scenario for the projects maintaining about the pharameutical products which are 100% natural and no.1 products in the
                entire country of the world of the earth
              </p>
            </div>
            <Image
              className=""
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default LatestProducts