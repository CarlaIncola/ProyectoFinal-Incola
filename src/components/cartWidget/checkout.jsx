import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/orders";
import { toast } from "react-toastify";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    toast.success("Your order is on your way 🚀");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity}) - $
                {(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>

          <button onClick={handleOrder}>Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;