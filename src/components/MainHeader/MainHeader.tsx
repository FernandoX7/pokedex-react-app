import classes from './MainHeader.module.css';

const MainHeader = () => {
  const pokedexLogoUrl = "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png";

  return (
    <header className={classes.MainHeader}>
      <img
        src={pokedexLogoUrl}
        alt="Pokédex logo" />
    </header>
  );
};

export default MainHeader;