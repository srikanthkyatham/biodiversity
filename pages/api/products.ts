/* eslint-disable import/no-anonymous-default-export */
import groq from "groq";
import client from "../../client";
import { NextApiRequest, NextApiResponse } from 'next';

const query = groq`*[_type == "product"]{
  title,
}`;
export default async (req: NextApiRequest, res: NextApiResponse) => {

  try {
    const products = await client.fetch(query);
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' })
  }
}