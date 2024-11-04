import PokemonCard from "./components/PokemonCard";
import Button from "./components/Button"
import Meteo from "./components/Meteo"
import Search from "./components/Search"
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {

  return (
    <div>
       <PokemonCard pokemon={pokemonList[0]}/>
    </div>
  );
}

export default App;