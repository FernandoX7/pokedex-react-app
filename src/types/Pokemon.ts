import { PokemonSprites } from "./PokemonSprites";
import { PokemonSpecies } from "./PokemonSpecies";
import { PokemonTypes } from "./PokemonTypes";
import { PokemonAbilities } from "./PokemonAbilities";

export interface Pokemon {
  id: string,
  abilities: PokemonAbilities[],
  species: PokemonSpecies,
  sprites: PokemonSprites,
  types: PokemonTypes[],
}