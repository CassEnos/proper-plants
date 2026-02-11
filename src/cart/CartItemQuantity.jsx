export default function CartItemQuantity(props) {
  return (
    <div className="cart-item-quantity">
      <button onClick={() => props.removeFromCart(props.item)}>-</button>
      <span>{props.item.quantity}</span>
      <button onClick={() => props.addToCart(props.item)}>+</button>
    </div>
  );
}
