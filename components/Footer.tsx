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
    name: 'fa fa-brands fa-linkedin',
    link: 'https://www.linkedin.com/company/80783383/admin/'
  }
]

const Footer = () => {
  return (
    <footer className="bg-black pt-5">
      <div className="flex flex-col justify-around px-4 sm:px-6 text-gray-800 lg:flex-row">
        <div className="p-5 space-y-1">
          <h3 className="text-white font-bold mb-2">Corporate Office</h3>
          <p className="text-white font-medium">Diversity Bio Sciences Pvt. Ltd.
          </p>
          <p className="text-white font-medium">Diversity Bio Sciences Pvt. Ltd. 
            Plot No 75 / A. IDA Mallapur, 
          </p>
          <p className="text-white font-medium">
            Hyderabad 500076
          </p>
          <p className="text-white font-medium">
            <MobileDetails />
          </p>
          <p className="text-white font-medium">
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
            <div className="uppercase text-white font-bold text-1xl">Site Map</div>
            <NavigationHeader listView={true} classStyle='flex flex-col' />
          </div>
          <div className="p-5">
            <div className="text-sm uppercase text-white font-bold mb-2">Social Media</div>
            {
              socialMediaLinks.map((item,index) => <a key={index.toString()} href={item.link}>
                <i className={item.name} style={{ color: 'white', fontSize: 25, marginRight: 20 }}></i></a>
              )
            }
          </div>
        </div>
    </footer>
  );
}

export default Footer
