import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./productCard.module.scss";

import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard} style={{ border: "1px solid #ccc", padding: "1rem", margin: "0.5rem" }}>
      <Link className={styles.ProduCardLink} to={`/product/${product.id}`}>
      <img 
          className={styles.productImage}
          src={product.image} 
          alt={product.name} 
          style={{ width: "100%", height: "150px", objectFit: "cover", marginBottom: "0.5rem" }}
        />
        <h3 className={styles.productName}>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
