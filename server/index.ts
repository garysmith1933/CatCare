import express, { Application } from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers/index.js'
import connectToDB from './config/db';
import typeDefs from './schema/schema.js'
import cors from 'cors';
require("dotenv").config();

const app: Application = express();
const PORT: Number = 8080;
app.use(cors());

app.use(express.static(path.join(__dirname, '../client')));

const apolloServer = new ApolloServer({typeDefs, resolvers})

connectToDB();

app.listen(PORT, async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: '/graphql'});

  console.log(`listening on port ${PORT}`)
  console.log(`GraphQL endpoint: http:localhost:${PORT}/graphql`)
});
