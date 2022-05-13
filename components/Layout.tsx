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
        <title>{description}</title>
        <meta property="og:title" content={description} key="title" />
        <meta name="description" content={description} />
      </Head>
      <div>{children}</div>
    </>
  );
}
