import classes from './RecentSearch.module.css';
import Card from "../Card/Card";

const RecentSearch = () => {
  return (
    // TODO: Add pokemon name to alt tag
    <Card className={classes.RecentSearch}>
      <img
        className={classes.PokemonImage}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        alt="Pokemon" />
    </Card>
  );
};

export default RecentSearch;