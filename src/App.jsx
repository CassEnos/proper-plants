import { useState } from "react";
import "./App.css";
import PlantList from "./components/PlantList";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const itemExists = cart.find((item) => item.id === plant.id);
    if (itemExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <>
      <PlantList onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </>
  );
}
