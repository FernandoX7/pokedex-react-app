import Card from "../Card/Card";
import classes from './PokemonEvolution.module.css';
import React from "react";

interface PokemonEvolutionProps {
  id: string,
  imageUrl: string,
  name: string
}

const PokemonEvolution: React.FC<PokemonEvolutionProps> = ({id, imageUrl, name}) => {
  return (
    <Card className={classes.PokemonEvolution}>
      <h3>{name}</h3>
      <p>{id}</p>

      <img
        className={classes.Pokemon}
        src={imageUrl}
        alt={name} />
    </Card>
  );
};

export default PokemonEvolution;