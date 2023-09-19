import Card from "../Card/Card";
import classes from './PokemonDetails.module.css';
import React from "react";
import { PokemonTypeColor } from "../../utils/PokemonTypeColor";
import { useLocation } from "react-router-dom";

const PokemonDetails = () => {
  const linkData = useLocation();
  const pokemon = linkData.state.pokemon;
  // TODO: Extract duplicate sprite code into separate function
  const sprites: any = pokemon.sprites;
  const spriteElements = [];

  for (const key in sprites) {
    const spriteUrl = sprites[key];

    if (typeof spriteUrl === "string") {
      spriteElements.push(
        <img
          key={key}
          src={spriteUrl}
          alt={key}
        />
      );
    }
  }

  return (
    <Card className={classes.MainDetails}>
      <div>
        <h2>{pokemon.species.name.toUpperCase()}</h2>
        <p>#{pokemon.id}</p>
        {/*TODO: Get current Pokemon actual description*/}
        <p>When it retracts its long neck into its shell, it squirts out water with vigorous force.</p>

        {spriteElements}

        {pokemon.types.map((item: any) => {
          return (
            <div
              key={Math.random()}
              className={classes.PokemonType}
              style={{
                backgroundColor: PokemonTypeColor(item.type.name)
              }}>
              {item.type.name.toUpperCase()}
            </div>
          );
        })}
      </div>

      <div>
        <img
          className={classes.MainSprite}
          src={pokemon.sprites.front_default || ""}
          alt={pokemon.species.name} />
      </div>
    </Card>
  );
};

export default PokemonDetails;