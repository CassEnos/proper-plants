export default function Plant(props) {
  return (
    <li className="plant">
      <figure>{props.plant.image}</figure>
      <h3>{props.plant.name}</h3>
      <button onClick={() => props.addToCart(props.plant)}>Add to cart</button>
    </li>
  );
}
