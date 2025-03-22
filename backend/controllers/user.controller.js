import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function createUser(req, res) {
  const { name, email, password } = req.body;
  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    res.status(400).send('User already exist');
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const NewUser = await userModel.create({
    name :name,
    email :email,
    password :hashedPassword
  });

  const token = jwt.sign({email: email, userId: NewUser._id}, 'secret');
  res.cookie('token', token);
  res.send('User created');
}


export {
  createUser
}