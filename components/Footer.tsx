import MobileDetails from './Mobile'
import EmailDetails from './Email'
import NavigationHeader from './NavigationHeader'

const socialMediaLinks = [
  {
    name: 'fa fa-brands fa-facebook-f',
    link: ''
  },
  {
    name: 'fa fa-brands fa-instagram',
    link: ''
  },
  {
    name: 'fa fa-brands fa-twitter',
    link: ''
  },
  {
    name: 'fa-brands fa-linkedin',
    link: ''
  }
]

const Footer = () => {
  return (
    <div className="bg-black pt-5">
      <div className="px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
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
            <p className="text-white">Hillsborough, Auckland, New Zealand</p>
            <p className="text-white">Bedfont Lane, Feltham, Middlesex, England United Kingdom</p>
            <p className="text-white">Letzenbergstraße, Rauenberg, Germany</p>
            <p className="text-white">Phoenix, AZ, USA</p>
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
