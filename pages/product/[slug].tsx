import groq from "groq";
import client from "../../client";
import ProductsPage from '../../components/ProductsPage'

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
export async function getStaticPaths() {
  // demystify the magic string
  // make them typed or understand what they are doing
  // slug vs the param change - the name of the file should the name of the parameter
  try {
    const paths = await client.fetch(
      `*[_type == "product" && defined(slug.current)][].slug.current`
    );
      return {
      paths: paths.map((slug: any) => ({ params: { slug } })),
      fallback: false,
    };
  } catch(error) {
    console.log(error)
  }
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  try {
    const { slug = "" } = context.params;
    const product = await client.fetch(query, { slug });
    return {
      props: {
        product,
      },
    };
  } catch(error) {
    return {
      props: {
        product: {
          title : "Missing title",
          name : "Missing name",
          categories: [],
          mainImage: [],
          authorImage: [],
        },
      },
    }
  } 
}

export default Product;