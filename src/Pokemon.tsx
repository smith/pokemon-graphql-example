import Loading from "./Loading";
import NotFound from "./NotFound";
import React from "react";
import ToggleableList from "./ToggleableList";

export interface PokemonProps {
  name: string;
}

export const Pokemon: React.FunctionComponent<PokemonProps> = ({ name }) => {
  const [areFastAttacksHidden, setAreFastAttacksHidden] = React.useState(true);
  const toggleAbilities = () =>
    setAreFastAttacksHidden(prevState => !prevState);

  const [areSpecialAttacksHidden, setAreSpecialAttacksHidden] = React.useState(
    true
  );
  const toggleMoves = () => setAreSpecialAttacksHidden(prevState => !prevState);

  const data = {};
  const loading = false;
  const types = ["Electric"];
  const minHeight = "0.35m";
  const maxHeight = "0.45m";
  const minWeight = "5.25kg";
  const maxWeight = "6.75kg";
  const image = "https://img.pokemondb.net/artwork/pikachu.jpg";
  const classification = "Mouse Pokémon";
  const fastAttacks = ["Quick Attack", "Thunder Shock"];
  const specialAttacks = ["Discharge", "Thunder", "Thunderbolt"];

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return <NotFound name={name} />;
  }

  return (
    <div className="Pokemon">
      <h1>{name}</h1>
      <section>
        <img src={image} alt={name} />
        <ul>
          <li>{classification}</li>
          <li>
            Height: {minHeight}&thinsp;&endash;&thinsp;{maxHeight}
          </li>
          <li>
            Weight: {minWeight}&thinsp;&endash;&thinsp;{maxWeight}
          </li>
          <li>Type: {types.join(", ")}</li>
        </ul>
      </section>
      <ToggleableList
        description="fast attacts"
        hidden={areFastAttacksHidden}
        items={fastAttacks}
        onChange={toggleAbilities}
      />
      <ToggleableList
        description="moves"
        hidden={areSpecialAttacksHidden}
        items={specialAttacks}
        onChange={toggleMoves}
      />
    </div>
  );
};

export default Pokemon;
