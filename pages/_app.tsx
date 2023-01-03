import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import Header from "../components/Header";
import Layout from "../components/Layout";
import NavigationHeader from "../components/NavigationHeader";
import "../styles/globals.css";
import { whatsappChat } from "../utils/whatsappChat";

type Props = {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: Props) {
  const [whatsAppDisable, setWhatsAppDisable] = useState(false);

  const windowScroll = () => {
    if (typeof window !== "undefined" && window) {
      window.scrollTo(0, 0);
    }
  };

  const whatsAppBrowserCheck = () => {
    if (typeof window !== "undefined" && window && navigator) {
      if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
        setWhatsAppDisable(true);
      }
    }
  };

  useEffect(() => {
    whatsAppBrowserCheck();
  }, []);

  return (
    <>
      <Layout>
        <Header />
        <NavigationHeader />
        <Component {...pageProps} />
        {!whatsAppDisable && (
          <a
            onClick={() => whatsappChat()}
            className="float"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-whatsapp my-float cursor-pointer" />
          </a>
        )}
        <a
          onClick={windowScroll}
          className="scroll-top-float"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-solid fa-arrow-up my-float cursor-pointer" />
        </a>
        <EnquiryForm />
      </Layout>
      <Analytics />
    </>
  );
}

export default MyApp;
