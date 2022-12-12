import express, { Application, Request, Response } from 'express';
const app: Application = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});