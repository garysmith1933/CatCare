import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from './models/User';
import Cat from './models/Cat';

const app: Application = express();
const PORT = 8080;

const syncAndSeed = async() => {
  mongoose.connect("mongodb://localhost/appdb")
  const user = new User({firstName: "Jackie", lastName: 'Smith', age: 25, email: "jackiesmith@gmail.com"})
  const bojji = new Cat({name: "Bojji", breed: 'European Shorthair', age: 7, weight: 7.3, owner: "639a36381666893ff7d92802" })
  const luma = new Cat({name: "Luma", breed: 'European Shorthair', age: 7, weight: 6.5, owner: "639a36381666893ff7d92802" })

  await bojji.save();
  await luma.save();
  await user.save();
  console.log("user saved", user)
  console.log("cat saved", bojji, luma)
}

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});

syncAndSeed();