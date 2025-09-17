// src/components/CartWidget/index.jsx
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./cartWidget.module.scss";

const CartWidget = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((p) => (
        <div
          key={p.id}
          style={{ borderBottom: "1px solid #ccc", marginBottom: "0.5rem" }}
        >
          <h4>{p.name}</h4>
          <p>Price: ${p.price}</p>
          <p>Quantity: {p.quantity}</p>
          <button className={styles.counterButton} onClick={() => increaseQuantity(p.id)}>+</button>
          <button onClick={() => decreaseQuantity(p.id)}>-</button>
          <button onClick={() => removeFromCart(p.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total}</p>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default CartWidget;
