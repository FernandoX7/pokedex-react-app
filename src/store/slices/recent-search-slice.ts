import { createSlice } from "@reduxjs/toolkit";
import { RECENT_SEARCHES_KEY } from "../../utils/local-storage";

const getStoredRecentSearches = () => {
  const storedData = localStorage.getItem(RECENT_SEARCHES_KEY);
  return storedData ? JSON.parse(storedData) : [];
};

const recentSearchSlice = createSlice({
  name: 'recentSearchSlice',
  initialState: {
    pokemon: getStoredRecentSearches(), // Initialize with data from local storage
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

      // Update local storage with the updated state
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(state.pokemon));
    }
  }
});

export const recentSearchActions = recentSearchSlice.actions;

export default recentSearchSlice;
