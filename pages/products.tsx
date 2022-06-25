import groq from "groq";
import client from "../client";
import { ProductType } from "../types";

interface Props {
  products: Array<ProductType>;
}

const Products = ({ products }: Props): JSX.Element => {
  return <div />;
};

const query = groq`*[_type == "product"]{
  title,
}`;

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const products = await client.fetch(query);
  return {
    props: {
      products,
    },
  };
}

export default Products;
