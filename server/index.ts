import express, { Application, Request, Response } from 'express';
import connectToDB from './config/db';
require("dotenv").config();

const app: Application = express();
const PORT = 8080;

connectToDB();

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
