/* eslint-disable import/no-anonymous-default-export */
import groq from "groq";
import { NextApiRequest, NextApiResponse } from "next";
import client from "../../client";

const query = groq`*[_type == "product"]{
  title,
  casNo
}`;
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const products = await client.fetch(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
  }
};
