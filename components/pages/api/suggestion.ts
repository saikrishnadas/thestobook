import type { NextApiRequest, NextApiResponse } from 'next'

import Suggestion from "../../models/Suggestion";
import dbConnect from "../../utils/mongo";
import slugify from 'slugify';

export default async function suggestion(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "GET") {
    try {
      const suggestions = await Suggestion.find({});
      res.status(200).json(suggestions);
    } catch (err) {
      res.status(400).json(err);
    }
  }

  if (method === "POST") {
    const slug = slugify(String(req.body.name));
    const data = {
      name: req.body.name,
      slug: slug
    }
    try {
      const suggestion = await Suggestion.create(data);
      res.status(201).json(suggestion);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}