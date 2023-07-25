import { Router } from "express";
import { sample_users } from "../data";
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { UserModel } from "../models/user.model";

const router = Router();

//the connection between db and code is asynchronous
router.get("/seed", asyncHandler(
  async (req, res) => {
    const userCount = await UserModel.countDocuments();
    if(userCount > 0){
      res.send("Seed is already done!");
      return;
    }

    //create all sample course inside db
    await UserModel.create(sample_users);
    res.send("Seed is done.");
  }
))

router.post("/login", asyncHandler(
  async(req, res) => {
    const {email, password} = req.body;     //destructuring assignment
    const user = await UserModel.findOne({email, password});

    if(user){
      res.send(generateTokenResponse(user));
    }
    else{
      res.status(400).send("User name or password is not valid!");
    }
}))

// router.post("/login", (req, res) => {
//   const {email, password} = req.body;     //destructuring assignment
//   const user = sample_users.find((user) => user.email === email && user.password === password);

//   if(user){
//     res.send(generateTokenResponse(user));
//   }
//   else{
//     res.status(400).send("User name or password is not valid!");
//   }
// })

const generateTokenResponse = (user: any) => {
  const token = jwt.sign({
    email:user.email, isAdmin:user.isAdmin
  }, "SomeRandomText", {
    expiresIn: "30d"
  });

  user.token = token;
  return user;
}

export default router;
