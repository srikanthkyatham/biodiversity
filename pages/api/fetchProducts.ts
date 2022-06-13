/* eslint-disable import/no-anonymous-default-export */
import groq from "groq";
import client from "../../client";
import { NextApiRequest, NextApiResponse } from 'next';
import { productsNameFilter } from '../../utils/productsReducer'

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
  phoneImage,
  iPadImage
}`;

export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const fetchAllProducts = req.body.map(async (item: any) => await client.fetch(query, { slug: productsNameFilter(item.title) }));
    const products = await Promise.all(fetchAllProducts)
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error fetchingProducts' })
  }
}