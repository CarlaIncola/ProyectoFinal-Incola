import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const inCart = cart.find((p) => p.id === product.id);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {(product.category || []).join(", ")}</p>

      {!inCart ? (
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      ) : (
        <>
          <button onClick={() => removeFromCart(product.id)}>Remover del carrito</button>
          <p>Cantidad: {inCart.quantity}</p>
        </>
      )}
    </div>
  );
};

export default ProductCard;

