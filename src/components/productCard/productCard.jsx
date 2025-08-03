import { useCart } from '../cartWidget/useCart';
import styles from "./productCard.module.scss";

const ProductCard = ({ product }) => {
    
    const { addToCart } = useCart();

    return (
        <div className={styles.productcard}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button 
            onClick={() => addToCart(product)}
            className="add-to-cart-btn"
        >
            Add to Cart
        </button>
        </div>
    );
};

export default ProductCard;