// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import User from "../../../models/User"
import dbConnect from "../../../utils/mongo";
import signToken from "../../../utils/auth";

// @ts-ignore
import bcrypt from 'bcryptjs';

export default async function createUser(req:NextApiRequest, res:NextApiResponse<any>) {
  const { method } = req;
  await dbConnect();

  if (method === "POST") {
    try {
      const newUser = new User({
          name:req.body.name,
          email:req.body.email,
          password:bcrypt.hashSync(req.body.password),
          img:req.body.img,
          isAdmin:false,    
        })
        const user = await newUser.save();
      
          const token = signToken(user);
          res.send({
              token,
              _id: user._id,
              name: user.name,
              email: user.email,
              img:user.img,
              isAdmin: user.isAdmin,
          })
      
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
