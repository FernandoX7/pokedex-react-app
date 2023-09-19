import classes from './RecentSearches.module.css';
import RecentSearch from "../../components/RecentSearch/RecentSearch";
import { useSelector } from "react-redux";
import { Pokemon } from "../../types/Pokemon";
import { Link } from "react-router-dom";

const RecentSearches = () => {
  const recentPokemonSearches: Pokemon[] = useSelector((state: any) => state.recentSearches.pokemon);
  const recentSearchesLimit = 10;

  return (
    <div className={classes.RecentSearches}>

      {recentPokemonSearches.slice(0, recentSearchesLimit).map((pokemon: Pokemon) => {
        return (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.id}`}
            state={{
              pokemon,
            }}>
            <RecentSearch
              key={pokemon.id}
              pokemon={pokemon}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default RecentSearches;