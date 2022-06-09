import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import groq from "groq";
import client from "../../client";
import ProductsPage from '../../components/ProductsPage'

function urlFor(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source);
}

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
  product: ProductType;
}

// http://localhost:3000/product/product1
const Product = (props: any) => <ProductsPage {...props} />

const query = groq`*[_type == "product" && slug.current == $slug][0]{
  title,
  mainImage,
  divCatNo,
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
}`;

// http://localhost:3000/product/product1
// export async function getStaticPaths() {
//   // demystify the magic string
//   // make them typed or understand what they are doing
//   // slug vs the param change - the name of the file should the name of the parameter
//   const paths = await client.fetch(
//     `*[_type == "product" && defined(slug.current)][].slug.current`
//   );

//   // console.log({ paths });
//   return {
//     paths: paths.map((slug: any) => ({ params: { slug } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps(context: {
//   params: { slug?: "" | undefined };
// }) {
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.params;
//   console.log('heres')
//   // console.log(slug)
//   const product = await client.fetch(query, { slug });
//   return {
//     props: {
//       product,
//     },
//   };
// }

export default Product;
