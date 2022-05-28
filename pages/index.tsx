import dynamic from 'next/dynamic'
import Header from '../components/Header'
import NavigationHeader from '../components/NavigationHeader'
import Description from '../components/Description'
import Products from '../components/Products'
import UpcomingProducts from '../components/UpcomingProducts'
import ContactUs from '../components/ContactUs'

const MainImage = dynamic(
  () => import('../components/MainImage'),
  { ssr: false }
)

export default function Home() {

  return (
    <div>
      <Header />
      <NavigationHeader />
      <main>
        <MainImage /> 
        <Description />
        {/* <Products /> */}
        <UpcomingProducts />
        <ContactUs />
      </main>
    </div>
  );
}
