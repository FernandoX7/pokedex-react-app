import classes from './SearchBar.module.css';
import { useDispatch } from "react-redux";
import { ChangeEvent, useMemo } from "react";
import { debounce } from "lodash";
import { fetchPokemonByName } from "../../store/actions/pokemon-actions";

const SearchBar = () => {
  const debounceTimeInMs = 300;
  const dispatch = useDispatch();

  const dispatchData = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchPokemonByName(event.target.value));
  };

  const searchInputHandler = useMemo(() => {
    return debounce(dispatchData, debounceTimeInMs);
  }, []);

  return (
    <div className={classes.SearchBar}>
      <input
        className={classes.SearchInput}
        placeholder="Search for a Pokémon"
        type="text"
        onChange={searchInputHandler}
      />
    </div>
  );
};

export default SearchBar;