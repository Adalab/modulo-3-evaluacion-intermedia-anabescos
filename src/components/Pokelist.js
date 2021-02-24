import Pokemon from "./Pokemon";

function Pokelist(props) {
  console.log(props.pokemons);
  const PokemonList = props.pokemons.map((eachPokemon) => (
    <li key={eachPokemon.id}>{eachPokemon.name}</li>
  ));
  return <ul>{PokemonList}</ul>;
}

export default Pokelist;
