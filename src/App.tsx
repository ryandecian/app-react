import PokemonCard from "./components/PokemonCard";
import Search from "./components/Search"
import Meteo from "./components/Meteo"

function App() {
  return (
    <div>
       <PokemonCard/>
       <Meteo icon="sunny"/>
    </div>
  );
}

export default App;