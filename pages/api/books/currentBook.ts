// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import Current from "../../../models/Current"
import dbConnect from "../../../utils/mongo";

export default async function currentBook(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Current.find({});
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (method === "POST") {
    try {
      await Current.remove({});
      const product = await Current.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}