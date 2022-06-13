import groq from "groq";
import client from "../client";
import ProductsOfFamily from '../components/ProductsOfFamily'
import { productsNameFilter } from '../utils/productsReducer'

const product_query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  mainImage,
  divCATNo,
  casNo,
  molF,
  molWt,
  inventoryStatus,
  productOverview,
  technicalData,
  reference,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  desktopImage,
  phoneImage,
  iPadImage
}`;

const ProductsOfFamilyComponent = (props: any) => <ProductsOfFamily {...props} />

export async function getServerSideProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const query = groq`*[_type == "product" && families[]->title match "${context.query.familyName.toString()}"]{
    title
  }`;
  const familyProducts = await client.fetch(query);
  const fetchAllProducts = familyProducts.map(async (item: any) => await client.fetch(product_query, { slug: productsNameFilter(item.title) }))
  const products = await Promise.all(fetchAllProducts)
  return {
    props: {
      products,
    },
  };
}

export default ProductsOfFamilyComponent;
