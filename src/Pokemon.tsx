import {
  PokemonQuery,
  PokemonQueryVariables,
  PokemonQuery_pokemon_attacks_fast,
  PokemonQuery_pokemon_attacks_special
} from "./types/PokemonQuery";

import Loading from "./Loading";
import NotFound from "./NotFound";
import React from "react";
import ToggleableList from "./ToggleableList";
import gql from "graphql-tag";
import idx from "idx";
import { useQuery } from "react-apollo";

export interface PokemonProps {
  name: string;
}

export type Attack =
  | PokemonQuery_pokemon_attacks_fast
  | PokemonQuery_pokemon_attacks_special;

const query = gql`
  query PokemonQuery($name: String!) {
    pokemon(name: $name) {
      id
      number
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      image
      classification
      types
      resistant
      name
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
    }
  }
`;

export const Pokemon: React.FunctionComponent<PokemonProps> = ({ name }) => {
  const [areFastAttacksHidden, setAreFastAttacksHidden] = React.useState(true);
  const toggleAbilities = () =>
    setAreFastAttacksHidden(prevState => !prevState);

  const [areSpecialAttacksHidden, setAreSpecialAttacksHidden] = React.useState(
    true
  );
  const toggleMoves = () => setAreSpecialAttacksHidden(prevState => !prevState);

  const variables = { name };
  const { data, loading } = useQuery<PokemonQuery, PokemonQueryVariables>(
    query,
    { variables }
  );
  const pokemon = data && data.pokemon;

  console.log({ data, loading });

  if (loading) {
    return <Loading />;
  }

  if (!pokemon) {
    return <NotFound name={name} />;
  }

  const types = pokemon.types || [];
  const minHeight = idx(pokemon, _ => _.height.minimum);
  const maxHeight = idx(pokemon, _ => _.height.maximum);
  const minWeight = idx(pokemon, _ => _.weight.minimum);
  const maxWeight = idx(pokemon, _ => _.weight.maximum);
  const image = idx(pokemon, _ => _.image);
  const classification = pokemon.classification;
  const fastAttacks = idx(pokemon, _ => _.attacks.fast) || [];
  const specialAttacks = idx(pokemon, _ => _.attacks.special) || [];

  return (
    <div className="Pokemon">
      <h1>{name}</h1>
      <section>
        {image && <img src={image} alt={name} />}
        <ul>
          <li>{classification}</li>
          <li>
            Height: {minHeight}&thinsp;&ndash;&thinsp;{maxHeight}
          </li>
          <li>
            Weight: {minWeight}&thinsp;&ndash;&thinsp;{maxWeight}
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
