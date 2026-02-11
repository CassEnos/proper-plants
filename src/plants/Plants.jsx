import Plant from "./Plant";

import "./plants.css";

export default function Plants(props) {
  return (
    <section className="plants">
      <h2>Plants</h2>
      <ul>
        {props.plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={props.addToCart} />
        ))}
      </ul>
    </section>
  );
}
