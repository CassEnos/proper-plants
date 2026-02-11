import CartItem from "./CartItem";

import "./cart.css";

export default function Cart(props) {
  return (
    <section className="cart">
      <h2>Cart</h2>
      {props.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {props.cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                addToCart={props.addToCart}
                removeFromCart={props.removeFromCart}
              />
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
