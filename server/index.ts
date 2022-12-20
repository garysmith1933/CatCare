import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { readFile } from 'fs/promises';
import resolvers from './resolvers'
import connectToDB from './config/db';
require("dotenv").config();

const app: Application = express();
const PORT = 8080;

const typeDefs = readFile('./schema.graphql', 'utf-8')
// const apolloServer = new ApolloServer({typeDefs: String, resolvers})


connectToDB();

app.listen(PORT, async () => {
  // await apolloServer.start();
  // apolloServer.applyMiddleware({ app, path: '/graphql'});

  console.log(`listening on port ${PORT}`)
});
