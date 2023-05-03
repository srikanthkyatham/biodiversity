import Head from "next/head";
import { ReactNode } from "react";
import { description } from "../lib/constants";

type Props = {
  children: ReactNode;
};

const title = "Bio diversity sciences";

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        { (router.pathname === '/' || router.pathname === '') ?
               
            <>
                 <title>Delivering Diversity in Biosciences Research | Diversity BioSciences</title>
                 <meta property="og:title" content="Delivering Diversity in Biosciences Research | Diversity BioSciences" key="title" />
                 <meta name="description" content="Diversity BioSciences is a research org for the Custom synthesis of new products, committed to providing services/solutions to the Pharmaceutical & Biotech industries." />
                 <meta property="og:description " content="Diversity BioSciences is a research org for the Custom synthesis of new products, committed to providing services/solutions to the Pharmaceutical & Biotech industries." />
                 <meta name="keywords" content="Diversity BioSciences, biosciences, bioscience research, Pharmaceutical & Biotech industries, Biotech industries, Bio Sciences research organization" />
            </>
       :
            ((router.pathname === '/families' || router.pathname === 'families') ?
                 <>
                      <title>Custom Synthesis of Intermediates and API's | Diversity BioSciences</title>
                      <meta property="og:title" content="Custom Synthesis of Intermediates and API's | Diversity BioSciences" key="title" />
                      <meta name="description" content="We developed deep expertise in Custom Synthesis, Intermediates & APl's development and have continuously invested in its people resources and infrastructure." />
                      <meta property="og:description " content="We developed deep expertise in Custom Synthesis, Intermediates & APl's development and have continuously invested in its people resources and infrastructure." />
                      <meta name="keywords" content="custom synthesis, intermediates, API's, pharmaceuticals, chemical synthesis, organic chemistry, process development" />
                 </>
            :
                 null
            )
       }
        <link rel="icon" href="/android-icon-36x36.png" />
      </Head>
      <div>{children}</div>
    </>
  );
}
