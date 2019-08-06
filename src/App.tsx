import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import Pokemon from "./Pokemon";
import React from "react";

const client = new ApolloClient({
  connectToDevTools: true,
  link: new HttpLink({ uri: "https://graphql-pokemon.now.sh" }),
  cache: new InMemoryCache()
});

const App: React.FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value);

  return (
    <ApolloProvider client={client}>
      <header>
        <h1>Pokedex</h1>
        <input
          autoFocus
          defaultValue={searchQuery}
          onChange={handleChange}
          type="search"
          placeholder="Search Pokemon by name"
        />
      </header>
      <main>{searchQuery && <Pokemon name={searchQuery} />}</main>
    </ApolloProvider>
  );
};

export default App;
