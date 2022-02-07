// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Book from "../../../../models/Book"
import dbConnect from "../../../../utils/mongo";

export default async function getBookByAuthor(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      const product = await Book.find(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

