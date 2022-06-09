import groq from "groq";
import client from "../../client";

interface FamilyType {
  title: string;
}

interface Props {
  family: FamilyType;
}

const Family = ({ family }: Props): JSX.Element => {
  const { title } = family;
  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
};

const query = groq`*[_type == "category" && slug.current == $slug][0]{
  title,
}`;

export async function getStaticPaths() {
  // demystify the magic string
  // make them typed or understand what they are doing
  // slug vs the param change - the name of the file should the name of the parameter
  const paths = await client.fetch(
    `*[_type == "category" && defined(slug.current)][].slug.current`
  );

  // console.log({ paths });
  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context: {
  params: { slug?: "" | undefined };
}) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const family = await client.fetch(query, { slug });
  return {
    props: {
      family,
    },
  };
}

export default Family;
