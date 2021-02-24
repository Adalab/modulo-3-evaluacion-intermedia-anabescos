import Pokemon from "./Pokemon";

function Pokelist(props) {
  const PokemonList = props.pokemons.map((eachPokemon) => (
    <li key={eachPokemon.id}>
      <Pokemon
        img={eachPokemon.url}
        name={eachPokemon.name}
        types={eachPokemon.types}
      />
    </li>
  ));
  return <ul>{PokemonList}</ul>;
}

export default Pokelist;
