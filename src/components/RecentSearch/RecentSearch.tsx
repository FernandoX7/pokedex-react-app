import classes from './RecentSearch.module.css';
import React from "react";
import { Pokemon } from "../../types/Pokemon";
import { PokemonTypeColor } from "../../utils/PokemonTypeColor";

interface RecentSearchProps {
  pokemon: Pokemon;
}

const RecentSearch: React.FC<RecentSearchProps> = ({pokemon}) => {
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
    <div className={classes.RecentSearch}>
      <div className={classes.LeftContainer}>
        <h2 className={classes.Name}>
          {pokemon.species.name.toUpperCase()}
        </h2>

        <p className={classes.Id}>
          #{pokemon.id}
        </p>

        <img
          src={pokemon.sprites.front_default || ""}
          alt={pokemon.species.name} />
      </div>

      <div className={classes.RightContainer}>
        <div className={classes.HorizontalSection}>
          <h3 className={classes.SectionTitle}>
            Abilities
          </h3>

          {pokemon.abilities.map((item: any) => {
            return (
              <p
                key={Math.random()}
                className={classes.Ability}>
                {item.ability.name.charAt(0).toUpperCase() + item.ability.name.slice(1)}
              </p>
            );
          })}

        </div>

        <div className={classes.HorizontalSection}>
          <h3 className={classes.SectionTitle}>
            Moves
          </h3>

          <p>Mega-Punch + 99 more</p>
        </div>

        <div className={classes.HorizontalSection}>
          <h3 className={classes.SectionTitle}>
            Sprites
          </h3>

          <div className={classes.GridContainer}>
            {spriteElements}
          </div>
        </div>

        <div className={classes.HorizontalSection}>
          <h3 className={classes.SectionTitle}>
            Types
          </h3>

          {pokemon.types.map((item: any) => {
            return (
              <p
                key={Math.random()}
                className={classes.Type}
                style={{
                  backgroundColor: PokemonTypeColor(item.type.name)
                }}>
                {item.type.name.toUpperCase()}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentSearch;