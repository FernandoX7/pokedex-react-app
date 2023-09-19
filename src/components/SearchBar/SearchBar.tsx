import classes from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={classes.SearchBar}>
      <input
        className={classes.SearchInput}
        placeholder="Search for a Pokémon"
        type="text"
      />
    </div>
  );
};

export default SearchBar;