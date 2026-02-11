export default function Plant({ plant, onAddToCart }) {
  return (
    <li className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => onAddToCart(plant)}>Add to cart</button>
    </li>
  );
}
