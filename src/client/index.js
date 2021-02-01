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
        "Bearer 2jXanN0JhNlrpYgMFcYjR7XU0jcaqXoPBLwWpETv4zyeMaummrCydWM40bTSc0D-dZhV-mMC3t9PuwjY8f63YbqZlRkOauXqP31xf0ft7JEsERye055c5NdExdsOYHYx",
      "Accept-Language": "en-US",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export { client };
