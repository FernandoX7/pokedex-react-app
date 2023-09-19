# pokedex-react-web

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

## Project information

The project uses the https://pokeapi.co/docs/v2 API to allow searching of Pokémon.

You can also see the history of Pokémon you have searched. This history persists, so refreshing the browser will show the results again.

## What is _missing_

When clicking on a Pokémon you recently searched, the details page will load. On this page, the evolutions and the Pokémon description are hard-coded. For example, we need to hit a new endpoint to add the evolutions: https://pokeapi.co/api/v2/evolution-chain/3/. The description is available at this endpoint https://pokeapi.co/api/v2/pokemon-species/squirtle

We could then save this data into our redux store, presumably under a new "slice" since it doesn't relate to the `recent-serach-slice.ts`

## Screenshots

### Home
![Screenshot 2023-09-19 at 17 16 08](https://github.com/FernandoX7/Bluestone-for-Reddit/assets/16779411/b4525c8b-5473-44e1-860a-663e46f4ff07)

### Searching for a Pokémon
![Screenshot 2023-09-19 at 17 16 22](https://github.com/FernandoX7/Bluestone-for-Reddit/assets/16779411/2a2f964d-3346-4476-8439-93ee010be9ca)

### Pokémon details page (Accessible by clicking on a recent search)
![Screenshot 2023-09-19 at 17 16 35](https://github.com/FernandoX7/Bluestone-for-Reddit/assets/16779411/3a69bd94-eb36-4742-a91c-e9e3cf49931d)
