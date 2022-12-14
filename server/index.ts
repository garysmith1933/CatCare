import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from './models/User';

const app: Application = express();
const PORT = 8080;

const syncAndSeed = async() => {
  mongoose.connect("mongodb://localhost/appdb")
  const user = new User({name: "Jackie", age: 25})
  await user.save()
  console.log("user saved", user)
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});

syncAndSeed();