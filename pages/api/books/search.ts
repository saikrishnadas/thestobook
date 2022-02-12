// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Book from "../../../models/Book"
import dbConnect from "../../../utils/mongo";

export default async function searchBook(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      const searchedBooks = await Book.find({ name: { $regex: req.body.search, $options: "i" } });
      res.status(200).json(searchedBooks);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}