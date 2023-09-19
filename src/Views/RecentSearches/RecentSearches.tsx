import classes from './RecentSearches.module.css';
import RecentSearch from "../../components/RecentSearch/RecentSearch";
import { useSelector } from "react-redux";
import { Pokemon } from "../../types/Pokemon";

const RecentSearches = () => {
  const recentPokemonSearches: Pokemon[] = useSelector((state: any) => state.recentSearches.pokemon);
  const recentSearchesLimit = 10;

  return (
    <div className={classes.RecentSearches}>

      {recentPokemonSearches.slice(0, recentSearchesLimit).map((pokemon: Pokemon) => {
        return (
          <RecentSearch
            key={pokemon.id}
            pokemon={pokemon}
          />
        );
      })}
    </div>
  );
};

export default RecentSearches;