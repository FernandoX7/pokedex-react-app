import classes from './RecentSearch.module.css';
import Card from "../Card/Card";
import React from "react";

interface RecentSearchProps {
  id: string,
  imageUrl: string,
  name: string,
}

const RecentSearch: React.FC<RecentSearchProps> = ({id, imageUrl, name}) => {
  return (
    <Card className={classes.RecentSearch}>
      <h2>{name?.toUpperCase()}</h2>
      <p>#{id}</p>

      <img
        className={classes.PokemonImage}
        src={imageUrl}
        alt={name} />
    </Card>
  );
};

export default RecentSearch;