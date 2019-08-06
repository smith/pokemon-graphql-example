/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PokemonQuery
// ====================================================

export interface PokemonQuery_pokemon_weight {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface PokemonQuery_pokemon_height {
  __typename: "PokemonDimension";
  /**
   * The minimum value of this dimension
   */
  minimum: string | null;
  /**
   * The maximum value of this dimension
   */
  maximum: string | null;
}

export interface PokemonQuery_pokemon_attacks_fast {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
}

export interface PokemonQuery_pokemon_attacks_special {
  __typename: "Attack";
  /**
   * The name of this Pokémon attack
   */
  name: string | null;
}

export interface PokemonQuery_pokemon_attacks {
  __typename: "PokemonAttack";
  /**
   * The fast attacks of this Pokémon
   */
  fast: (PokemonQuery_pokemon_attacks_fast | null)[] | null;
  /**
   * The special attacks of this Pokémon
   */
  special: (PokemonQuery_pokemon_attacks_special | null)[] | null;
}

export interface PokemonQuery_pokemon {
  __typename: "Pokemon";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The identifier of this Pokémon
   */
  number: string | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  weight: PokemonQuery_pokemon_weight | null;
  /**
   * The minimum and maximum weight of this Pokémon
   */
  height: PokemonQuery_pokemon_height | null;
  image: string | null;
  /**
   * The classification of this Pokémon
   */
  classification: string | null;
  /**
   * The type(s) of this Pokémon
   */
  types: (string | null)[] | null;
  /**
   * The type(s) of Pokémons that this Pokémon is resistant to
   */
  resistant: (string | null)[] | null;
  /**
   * The name of this Pokémon
   */
  name: string | null;
  /**
   * The attacks of this Pokémon
   */
  attacks: PokemonQuery_pokemon_attacks | null;
}

export interface PokemonQuery {
  pokemon: PokemonQuery_pokemon | null;
}

export interface PokemonQueryVariables {
  name: string;
}
