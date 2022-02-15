import type { NextApiRequest, NextApiResponse } from 'next'

import Suggestion from "../../models/Suggestion";
import dbConnect from "../../utils/mongo";

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
    try {
      const suggestion = await Suggestion.create(req.body);
      res.status(201).json(suggestion);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}