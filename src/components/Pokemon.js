function Pokemon(props) {
  const typeList = props.types.map((eachType, index) => (
    <li key={index}>{eachType}</li>
  ));
  return (
    <article>
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <ul>{typeList}</ul>
    </article>
  );
}

export default Pokemon;
