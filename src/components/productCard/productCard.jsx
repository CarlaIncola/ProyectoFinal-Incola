import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Counter from "../Counter";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>

      <Counter
        quantity={quantity}
        onIncrement={() => setQuantity(q => q + 1)}
        onDecrement={() => setQuantity(q => Math.max(q - 1, 1))}
        onChange={val => setQuantity(Number(val))}
      />

      <button onClick={() => addToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
