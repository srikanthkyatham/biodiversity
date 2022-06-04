import groq from "groq";
import client from "../client";
import Families from '../components/Families'

interface FamilyType {
  title: string;
}

interface Props {
  families: Array<FamilyType>;
}

const FamiliesComponent = (props: any) => <Families {...props} />

const query = groq`*[_type == "family"]{
  title,
}`;

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const families = await client.fetch(query);
  console.log({ families });
  return {
    props: {
      families,
    },
  };
}

export default FamiliesComponent;
