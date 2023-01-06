import { ApolloClient, createHttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    if (networkError)
        console.log(`[Network error]: ${networkError}`);
});
const httpLink = createHttpLink({
    uri: "http://localhost:8080/graphql"
});
const authLink = setContext((_, { headers }) => {
    return {
        headers: Object.assign(Object.assign({}, headers), { authorization: window.localStorage.getItem("token") || "" })
    };
});
const client = new ApolloClient({
    link: from([errorLink, authLink.concat(httpLink)]),
    cache: new InMemoryCache()
});
export default client;
