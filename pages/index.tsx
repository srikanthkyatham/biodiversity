import Image from "next/image";
import Header from '../components/Header'
import NavigationHeader from '../components/NavigationHeader'
import Description from '../components/Description'
import Products from '../components/Products'
import UpcomingProducts from '../components/UpcomingProducts'
import ContactUs from '../components/ContactUs'

export default function Home() {
  return (
    <div>
      <Header />
      <NavigationHeader />
      <main>
      <div style={{ width: 'calc(100vw)', height: 'calc(100vh)', position: 'relative', backgroundImage: 'url(/MainImage.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
        
      <Description />
      <UpcomingProducts />
      <ContactUs />
      </main>
    </div>
  );
}
