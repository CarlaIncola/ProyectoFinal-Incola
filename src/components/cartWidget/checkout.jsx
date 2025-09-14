import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  if (cart.length === 0) return <p>No hay productos en el carrito</p>;

  const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cart.map((p) => (
        <div key={p.id}>
          <p>{p.name} x {p.quantity} = ${p.price * p.quantity}</p>
        </div>
      ))}
      <p>Total: ${total}</p>
      <button>Finalizar compra</button>
    </div>
  );
};

export default Checkout;
