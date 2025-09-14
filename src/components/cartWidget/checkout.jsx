import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/orders";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  if (cart.length === 0) return <p>No hay productos en el carrito</p>;

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  const handleCheckout = async () => {
    const order = { items: cart, total };
    try {
      const id = await createOrder(order);
      setOrderId(id);
      clearCart();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((p) => (
        <div key={p.id}>
          <p>{p.name} x {p.quantity} = ${p.price * p.quantity}</p>
        </div>
      ))}
      <p>Total: ${total}</p>
      {orderId ? (
        <p>✅ Compra finalizada! Tu ID de orden es: {orderId}</p>
      ) : (
        <button onClick={handleCheckout}>Finalizar compra</button>
      )}
    </div>
  );
};

export default Checkout;

