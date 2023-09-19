import { PokemonSprites } from "./PokemonSprites";
import { PokemonSpecies } from "./PokemonSpecies";

export interface Pokemon {
  id: string,
  sprites: PokemonSprites,
  species: PokemonSpecies,
}