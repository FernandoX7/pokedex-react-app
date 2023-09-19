import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorView from "./Views/ErrorView/ErrorView";
import PokemonDetailsView from "./Views/PokemonDetailsView/PokemonDetailsView";
import MainHeader from "./components/MainHeader/MainHeader";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />
  },
  {
    path: "pokemon/:pokemonId",
    element: <PokemonDetailsView />,
  },
]);

root.render(
  <React.StrictMode>
    <MainHeader />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
