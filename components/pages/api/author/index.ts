// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Author from "../../../models/Author"
import dbConnect from "../../../utils/mongo";

export default async function addProduct(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const authors = await Author.find({});
      res.status(200).json(authors);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (method === "POST") {
    try {
      const author = await Author.create(req.body);
      res.status(201).json(author);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

//Find One Author
// export async function findAuthor(req:NextApiRequest, res:NextApiResponse<any>) {
//     const { method } = req;
//     await dbConnect();
  
//     // if (method === "GET") {
//     //   try {
//     //     const authors = await Author.find({});
//     //     res.status(200).json(authors);
//     //   } catch (err) {
//     //     res.status(400).json(err);
//     //   }
//     // }
  
//     if (method === "POST") {
//       try {
//         const author = await Author.findOne({ slug: req.body.slug });
//         res.status(201).json(author);
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     }
//   }