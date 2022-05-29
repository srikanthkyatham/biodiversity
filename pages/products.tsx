import groq from "groq";
import client from "../client";

interface ProductType {
  categories: Array<string>;
  name: string;
  title: string;
  mainImage: string;
  authorImage: string;
  divCatNo: string;
  casNo: string;
  molF: string;
  molWt: string;
  inventoryStatus: string;
  productOverview: string;
  technicalData: string;
  reference: string;
}
interface Props {
  products: Array<ProductType>;
}

const Products = ({ products }: Props): JSX.Element => {
  console.log({ products });
  return <div />;
};

const query = groq`*[_type == "product"]{
  title,
}`;

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const products = await client.fetch(query);
  console.log({ products });
  return {
    props: {
      products,
    },
  };
}

export default Products;
