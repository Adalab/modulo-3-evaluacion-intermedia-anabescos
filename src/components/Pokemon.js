import "../stylesheets/pokemon.scss";

function Pokemon(props) {
  const typeList = props.types.map((eachType, index) => (
    <li className="card__types--type" key={index}>
      {eachType}
    </li>
  ));
  return (
    <article className="card">
      <img className="card__img" src={props.img} alt={props.name} />
      <h2 className="card__name">{props.name}</h2>
      <ul className="card__types">{typeList}</ul>
    </article>
  );
}

export default Pokemon;
