interface PokemonCardProps {
    pokemon: {
    name: string;
    imgSrc?: string; /*Optionnel car imgSrc peut ne pas exister, pas d'obligation de le déclarer*/
}}


function PokemonCard(props: PokemonCardProps) {

    return (
     <figure>
        {props.pokemon.imgSrc ?
         <img src={props.pokemon.imgSrc} alt={props.pokemon.name} /> :
         <p>???</p>}
         <figcaption>{props.pokemon.name}</figcaption>
     </figure>
     )
  }
  
  export default PokemonCard;