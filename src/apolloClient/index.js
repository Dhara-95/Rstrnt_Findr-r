import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization:
        "Bearer S1Zn98krZ67DXy-C4ZByWC-hwfPsUu8El_amtr7CX5xjZJ07d-qrhawcvyOBzx1WwKzqK6bfEN7dNu1ynU2b8AcCN5nQGFtQvl0oHpH-g9Wlc2oyGi9jQMzeVtwOYHYx",
      "Accept-Language": "en-US",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export { client };
