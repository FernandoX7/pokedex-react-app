import { AllPokemonTypes } from "../types/AllPokemonTypes";

export const PokemonTypeColor = (type: keyof AllPokemonTypes): string => {
  switch (type) {
    case 'normal':
      return '#A8A878';
    case 'fire':
      return '#E57F37';
    case 'water':
      return '#6D8BD5';
    case 'grass':
      return '#7AB159';
    case 'electric':
      return '#F8D030';
    case 'ice':
      return '#90BAB7';
    case 'fighting':
      return '#C03028';
    case 'poison':
      return '#964D92';
    case 'ground':
      return '#C3AB6A';
    case 'flying':
      return '#645D8D';
    case 'psychic':
      return '#D26280';
    case 'bug':
      return '#868E36';
    case 'rock':
      return '#A6934A';
    case 'ghost':
      return '#705898';
    case 'dragon':
      return '#754BCF';
    case 'dark':
      return '#444032';
    case 'steel':
      return '#B8B8D0';
    case 'fairy':
      return '#CEA3A5';
  }
};