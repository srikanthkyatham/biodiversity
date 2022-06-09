import MobileDetails from './Mobile'
import EmailDetails from './Email'
import NavigationHeader from './NavigationHeader'

const socialMediaLinks = [
  {
    name: 'fa fa-brands fa-facebook-f',
    link: 'https://www.facebook.com/profile.php?id=100049784684352'
  },
  {
    name: 'fa fa-brands fa-instagram',
    link: 'https://www.instagram.com/diversitybiosciences/'
  },
  {
    name: 'fa fa-brands fa-twitter',
    link: 'https://twitter.com/diversityDBS'
  },
  {
    name: 'fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/company/80783383/admin/'
  }
]

const Footer = () => {
  return (
    <div className="bg-black pt-5">
      <div className="flex flex-col justify-around px-4 sm:px-6 text-gray-800 md:flex-row">
        <div className="p-5">
          <h3 className="text-white">Corporate Office</h3>
          <p className="text-white">Diversity Bio Sciences Pvt. Ltd. 
            <br></br>
            Plot No 75 / A. IDA Mallapur, 
            <br></br>
            Hyderabad 500076 
            <br></br>
            <MobileDetails /> 
            <br></br>
            <EmailDetails />
          </p>
        </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">Our Branches</div>
            <div className='flex flex-col flex-wrap w-80 md:flex-row'>
              <p className="text-white mt-5 md:w-36">Hillsborough, Auckland, New Zealand</p>
              <p className="text-white mt-5 md:w-36">Bedfont Lane, Feltham, Middlesex, England United Kingdom</p>
              <p className="text-white mt-5 md:w-36">Letzenbergstraße, Rauenberg, Germany</p>
              <p className="text-white mt-5 md:w-36">Phoenix, AZ, USA</p>
            </div>
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">Site Map</div>
            <NavigationHeader listView={true} classStyle='flex flex-col' />
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold">Social Media</div>
            {
              socialMediaLinks.map((item,index) => <a key={index.toString()} href={item.link}><i className={item.name} style={{ color: 'white', marginRight: 10 }}></i></a>)
            }
          </div>
        </div>
    </div>
  );
}

export default Footer
