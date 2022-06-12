import dynamic from 'next/dynamic'
import Description from '../components/Description'
import Footer from '../components/Footer'
import HomePageProducts from '../components/HomePageProducts'
import UpcomingProducts from '../components/UpcomingProducts'
import ContactUs from '../components/ContactUs'
import Accreditation from '../components/Accreditation'

const MainImage = dynamic(
  () => import('../components/MainImage'),
  { ssr: false }
)

export default function Home() {

  return (
    <div>
      <main>
        <MainImage /> 
        <Description />
        <HomePageProducts />
        <UpcomingProducts />
        <ContactUs displayEnquiryForm={false} onConfirmation={() => console.log('')} />
        <Accreditation />
        <Footer />
      </main>
    </div>
  );
}
