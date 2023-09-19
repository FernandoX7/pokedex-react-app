import classes from './PokemonDetailsView.module.css';
import PokemonEvolution from "../../components/PokemonEvolution/PokemonEvolution";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

const PokemonDetailsView = () => {
  return (
    <div className={classes.PokemonDetailsView}>
      <PokemonDetails />

      <div className={classes.Evolutions}>
        <PokemonEvolution
          id="#007"
          imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
          name="Squirtle" />
        <PokemonEvolution
          id="#008"
          imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"
          name="Wartortle" />
        <PokemonEvolution
          id="#009"
          imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
          name="Blastoise" />
      </div>
    </div>
  );
};

export default PokemonDetailsView;