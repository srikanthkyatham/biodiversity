/* eslint-disable import/no-anonymous-default-export */
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../client";
import { productsNameFilter } from "../../utils/productsReducer";

const query = groq`*[_type == "product" && slug.current == $slug][0]{
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

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(req.body);
    const fetchAllProducts = req.body.map(
      async (item: any) =>
        await client.fetch(query, { slug: productsNameFilter(item.title) })
    );
    const products = await Promise.all(fetchAllProducts);
    console.log(products);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error, errorText: "Fetch Products Failed" });
  }
};
