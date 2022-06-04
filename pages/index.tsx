import dynamic from 'next/dynamic'
import Description from '../components/Description'
import Products from '../components/Products'
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
        <ContactUs />
        <Accreditation />
      </main>
    </div>
  );
}
