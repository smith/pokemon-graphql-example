import Pokemon from "./Pokemon";
import React from "react";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setSearchQuery(event.target.value),
    []
  );

  return (
    <>
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
    </>
  );
};

export default App;
