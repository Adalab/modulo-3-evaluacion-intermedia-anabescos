import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.scss";

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
  return <ul className="container__title--pokelist">{PokemonList}</ul>;
}

export default Pokelist;
