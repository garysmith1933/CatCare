var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import resolvers from './resolvers/index.js';
import connectToDB from './config/db';
import typeDefs from './schema/schema.js';
import cors from 'cors';
require("dotenv").config();
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.static(path.join(__dirname, '../client')));
const apolloServer = new ApolloServer({ typeDefs, resolvers });
connectToDB();
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield apolloServer.start();
    apolloServer.applyMiddleware({ app, path: '/graphql' });
    console.log(`listening on port ${PORT}`);
    console.log(`GraphQL endpoint: http:localhost:${PORT}/graphql`);
}));
