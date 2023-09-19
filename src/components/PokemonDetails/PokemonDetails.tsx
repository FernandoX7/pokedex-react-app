import Card from "../Card/Card";
import classes from './PokemonDetails.module.css';
import React from "react";
import { PokemonTypeColor } from "../../utils/PokemonTypeColor";
import { PokemonTypes } from "../../types/PokemonTypes";

interface PokemonDetailsProps {
  description: string,
  id: string,
  imageUrl: string,
  name: string,
  sprites: string[],
  type: keyof PokemonTypes,
}

const PokemonDetails: React.FC<PokemonDetailsProps> = (props) => {
  const {
    description,
    id,
    imageUrl,
    name,
    sprites,
    type,
  } = props;

  return (
    <Card className={classes.MainDetails}>
      <div>
        <h2>{name}</h2>
        <p>{id}</p>
        <p>{description}</p>

        <div className={classes.Sprites}>
          {sprites.map(sprite => (
            <img
              key={Math.random()} // Simple key for a simple string array
              className={classes.Sprite}
              src={sprite}
              alt={name} />
          ))}
        </div>

        <div
          className={classes.PokemonType}
          style={{
            backgroundColor: PokemonTypeColor(type)
          }}>
          {type.toUpperCase()}
        </div>
      </div>

      <div>
        <img
          className={classes.MainSprite}
          src={imageUrl}
          alt={name} />
      </div>
    </Card>
  );
};

export default PokemonDetails;