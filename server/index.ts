import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Application = express();
const PORT = 8080;

mongoose.connect("mongodb://localhost/appdb");

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
