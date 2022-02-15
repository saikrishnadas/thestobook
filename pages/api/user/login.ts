// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import User from "../../../models/User"
import dbConnect from "../../../utils/mongo";
import signToken from "../../../utils/auth";

// @ts-ignore
import bcrypt from 'bcryptjs';

export default async function findUser(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      const user = await User.findOne({email:req.body.email});
      if(user && bcrypt.compareSync(req.body.password, user.password)){
          const token = signToken(user);
          res.send({
              token,
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
          })
      } else{
          res.status(401).send({message:"Invalid user or password"})
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
