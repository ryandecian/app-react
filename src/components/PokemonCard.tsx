interface PokemonProps {
    src ?: string;
    name: string;

}

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

function PokemonCard(props: PokemonProps) {
    const {src, name} = props
    const pokemon = pokemonList[1]
    return (
     <figure>
        {pokemon.imgSrc ?
         <img src={pokemon.imgSrc} alt={pokemon.imgSrc} /> :
         <p>???</p>}
         <figcaption>{pokemon.name}</figcaption>
     </figure>
     )
  }
  
  export default PokemonCard;