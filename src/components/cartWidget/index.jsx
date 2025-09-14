import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const CartWidget = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  if (cart.length === 0) return <p>El carrito está vacío</p>;

  return (
    <div>
      <h2>Carrito</h2>
      {cart.map((p) => (
        <div key={p.id} style={{ borderBottom: "1px solid #ccc", marginBottom: "0.5rem" }}>
          <h4>{p.name}</h4>
          <p>Precio: ${p.price}</p>
          <p>Cantidad: {p.quantity}</p>
          <button onClick={() => increaseQuantity(p.id)}>+</button>
          <button onClick={() => decreaseQuantity(p.id)}>-</button>
          <button onClick={() => removeFromCart(p.id)}>Eliminar</button>
        </div>
      ))}
      <p>Total: ${cart.reduce((acc, p) => acc + p.price * p.quantity, 0)}</p>
    <Link to="/checkout">
  <button>Ir a Checkout</button>
</Link>
    </div>
  );
};

export default CartWidget;

