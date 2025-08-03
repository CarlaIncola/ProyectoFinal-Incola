import products from '../data/products';
import { useCart } from '../components/cartWidget/useCart';
import styles from "./itemListContainer.module.scss";
import ProductCard from '../components/productCard/productCard';

const ProductsPage = () => {
    
    const { addToCart } = useCart();

    return (
        <div className={styles.productsgrid}>
        {products.map(product => (
            <div key={product.id} className={ProductCard}>
            <img 
                src={product.image} 
                alt={product.name} 
                className="product-image"
            />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button 
                onClick={() => addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
                })}
                className="add-to-cart-btn"
            >
                Add to Cart
            </button>
            </div>
        ))}
        </div>
    );
};

export default ProductsPage