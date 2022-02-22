// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import User from "../../../models/User"
import dbConnect from "../../../utils/mongo";

// @ts-ignore
import bcrypt from 'bcryptjs';

export default async function addUser(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  const {name, email, password, isAdmin} = req.body;
  await dbConnect();

  if (method === "POST") {
    try {
      const user = await User.create({
        name:name,
        email:email,
        password:bcrypt.hashSync(password),
        isAdmin:isAdmin
      });
      res.status(201).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
