import { createSlice } from "@reduxjs/toolkit";

const recentSearchSlice = createSlice({
  name: 'recentSearchSlice',
  initialState: {
    pokemon: [],
  },
  reducers: {
    addRecentSearch(state: any, action) {
      const newItem = action.payload.pokemon;
      const existingIndex = state.pokemon.findIndex((item: any) => {
        return item.id === newItem.id;
      });

      if (existingIndex !== -1) {
        // The Pokemon already exists, remove it from the array to avoid duplicate results
        state.pokemon.splice(existingIndex, 1);
      }

      // Add the new Pokemon to the beginning of the array
      state.pokemon.unshift(newItem);

    }
  }
});

export const recentSearchActions = recentSearchSlice.actions;

export default recentSearchSlice;