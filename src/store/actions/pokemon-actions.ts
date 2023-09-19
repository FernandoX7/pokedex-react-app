import axios from "axios";
import { recentSearchActions } from "../slices/recent-search-slice";
import { Pokemon } from "../../types/Pokemon";
import { Dispatch } from "@reduxjs/toolkit";

async function getPokemonByName(name: string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = response.data;

    if (data) {
      return data;
    } else {
      throw new Error('Error getting Pokemon by name');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export const fetchPokemonByName: any = (name: string) => {
  return async (dispatch: Dispatch) => {
    const data: Pokemon = await getPokemonByName(name);

    if (data) {
      dispatch(
        recentSearchActions.addRecentSearch({
          pokemon: data,
        })
      );
    } else {
      // TODO: Display error in UI
      console.error("Error finding pokemon with name:", name);
    }
  };
};