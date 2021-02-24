import data from "../data/data.json";
import Pokelist from "./Pokelist";

function App() {
  return (
    <div className="App">
      <Pokelist pokemons={data} />
    </div>
  );
}

export default App;
