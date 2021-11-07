import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Bio diversity sciences</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
