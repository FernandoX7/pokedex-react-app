import { PokemonSprites } from "./PokemonSprites";
import { PokemonSpecies } from "./PokemonSpecies";
import { PokemonTypes } from "./PokemonTypes";

export interface Pokemon {
  id: string,
  species: PokemonSpecies,
  sprites: PokemonSprites,
  types: PokemonTypes[],
}