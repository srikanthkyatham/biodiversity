import dynamic from 'next/dynamic'
import Description from '../components/Description'
import Products from '../components/Families'
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
        {/* <Products /> */}
        <UpcomingProducts />
        <ContactUs displayEnquiryForm={false} onConfirmation={() => console.log('')} />
        <Accreditation />
      </main>
    </div>
  );
}
