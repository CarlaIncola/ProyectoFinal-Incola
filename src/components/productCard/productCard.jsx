import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
      <Link to={`/product/${product.id}`}>
      <img 
          src={product.image} 
          alt={product.name} 
          style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "0.5rem" }}
        />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
