import { PokemonSprites } from "./PokemonSprites";
import { PokemonSpecies } from "./PokemonSpecies";
import { PokemonTypes } from "./PokemonTypes";
import { PokemonAbilities } from "./PokemonAbilities";
import { PokemonMoves } from "./PokemonMoves";

export interface Pokemon {
  id: string,
  abilities: PokemonAbilities[],
  moves: PokemonMoves[],
  species: PokemonSpecies,
  sprites: PokemonSprites,
  types: PokemonTypes[],
}