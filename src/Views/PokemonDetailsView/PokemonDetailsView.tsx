import classes from './PokemonDetailsView.module.css';
import PokemonEvolution from "../../components/PokemonEvolution/PokemonEvolution";
import PokemonDetails from "../../components/PokemonDetails/PokemonDetails";

const PokemonDetailsView = () => {
  const sprites = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
  ];

  return (
    <div className={classes.PokemonDetailsView}>
      <PokemonDetails
        description="When it retracts its long neck into its shell, it squirts out water with vigorous force."
        id="#007"
        imageUrl="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
        name="Squirtle"
        sprites={sprites}
        type={"water"} />

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