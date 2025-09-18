import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./productCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link to={`/product/${product.id}`} className={styles.productCardLink}>
        <img src={product.image} alt={product.name} className={styles.productImage} />
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productPrice}>${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
