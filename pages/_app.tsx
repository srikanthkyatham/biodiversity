import Layout from "../components/Layout";
import "../styles/globals.css";
import Header from '../components/Header'
import NavigationHeader from '../components/NavigationHeader'
import { whatsappChat } from '../utils/whatsappChat'
import Footer from '../components/Footer'
import EnquiryForm from '../components/EnquiryForm'

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Header />
      <NavigationHeader />
      <Component {...pageProps} />
      <a onClick={() => whatsappChat()} className="float" target="_blank" rel="noreferrer">
        <i className="fa fa-whatsapp my-float"></i>
      </a>
      <Footer />
      <EnquiryForm />
    </Layout>
  );
}

export default MyApp;
