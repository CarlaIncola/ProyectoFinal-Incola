import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./cartWidget.module.scss";
import { createOrder } from "../../services/orders";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (cart.length === 0 && !orderPlaced) return <p>You didn't add any product to the cart.</p>;

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleOrder = () => {
    setOrderPlaced(true);
    clearCart();
  };
  
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Checkout</h2>

      {orderPlaced ? (
        <p style={{ fontSize: "1.2rem", color: "green" }}>
          🎉 Your order is on its way!
        </p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span>{item.name} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <hr />
          <p style={{ fontWeight: "bold", fontSize: "1.1rem", textAlign: "right" }}>
            Total: ${total.toFixed(2)}
          </p>

          <button 
            onClick={handleOrder} 
            className={StyleSheet.orderButton}
          >
            Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
