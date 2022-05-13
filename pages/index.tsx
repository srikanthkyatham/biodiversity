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
      <div style={{ width: 'calc(100vw)', height: '500px', position: 'relative', backgroundImage: 'url(mainimage.jpeg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
        
      <Description />
      <Products />
      <UpcomingProducts />
      <ContactUs />
      </main>
    </div>
  );
}
