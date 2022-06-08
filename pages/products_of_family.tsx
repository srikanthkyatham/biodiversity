import groq from "groq";
import client from "../client";
import { ProductType } from "./types";

interface Props {
  products: Array<ProductType>;
}

const ProductsOfFamily = ({ products }: Props): JSX.Element => {
  //console.log({ products });
  return <div />;
};

const query = groq`*[_type == "product" && families[]->title match "Dexamethasone"]{
  title
}`;

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const products = await client.fetch(query);
  //console.log({ products });
  console.log("families");
  console.dir(products);
  return {
    props: {
      products,
    },
  };
}

export default ProductsOfFamily;
