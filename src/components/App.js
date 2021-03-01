import pokemonData from "../data/data.json";
import Pokelist from "./Pokelist";
import { useState } from "react";
import "../stylesheets/App.scss";

function App() {
  const [data] = useState(pokemonData);
  return (
    <div className="container">
      <h1 className="container__title">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt=""
        />
      </h1>
      <Pokelist pokemons={data} />
    </div>
  );
}

export default App;
