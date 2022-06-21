import {
  ApolloClient,
  createHttpLink,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = new HttpLink({ uri: "http://localhost:9000/graphql" });

var token = localStorage.getItem("user");
if (localStorage.getItem("admin")) token = localStorage.getItem("admin");
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = authLink.concat(httpLink);

export default new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
