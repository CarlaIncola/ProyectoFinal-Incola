import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./cartWidget.module.scss";

const CartWidget = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CartContext);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div className={styles.cartPage}>
      <h2>Your cart</h2>
      {cart.map((p) => (
        <div
          key={p.id}
          className={styles.cartContainer}
          style={{ borderBottom: "1px solid #ccc", marginBottom: "0.5rem" }}
        >
          {p.image && (
            <img 
              src={p.image}
              alt={p.name}
              className={styles.productImage}
            />
          )}
          <h4>{p.name}</h4>
          <p>${p.price}</p>
          <div>
            <button className={`${styles.counterButton} ${styles.handlerLeft}`} onClick={() => increaseQuantity(p.id)}>+</button>
            <span className={styles.numberCount}>{p.quantity}</span>
            <button className={`${styles.counterButton} ${styles.handlerRight}`} onClick={() => decreaseQuantity(p.id)}>-</button>
          </div>
          <button className={styles.removeFromCart} onClick={() => removeItem(p.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default CartWidget;
