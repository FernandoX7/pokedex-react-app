import { configureStore } from "@reduxjs/toolkit";
import recentSearchSlice from "./slices/recent-search-slice";

const store = configureStore({
    reducer: {
        recentSearches: recentSearchSlice.reducer,
    }
})

export default store;