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
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const incrementation = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  const decrementation = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  return (
    <div>
       <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
       {pokemonIndex > 0 && <button onClick = {decrementation}>Précédent</button>}
       {pokemonIndex < 4 && <button onClick = {incrementation}>Suivant</button>}
    </div>
  );
}

export default App;