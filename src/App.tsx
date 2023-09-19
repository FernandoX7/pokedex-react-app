import React from 'react';
import MainHeader from "./components/MainHeader/MainHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import RecentSearches from "./Views/RecentSearches/RecentSearches";

const App = () => {
  return (
    <>
      <MainHeader />
      <SearchBar />
      <RecentSearches />
    </>
  );
};

export default App;
