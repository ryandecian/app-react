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
        id: 0,
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        id: 1,
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        id: 2,
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        id: 3,
    },
    {
      name: "mew",
      id: 4,
    },
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  
    return (
      <div>
        <nav>
           {pokemonList.map((Var) => {
            return (
              <button key={Var.id} onClick = {() => setPokemonIndex(Var.id)}>{Var.name}</button>
           )})}
        </nav>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    );
  }

export default App;