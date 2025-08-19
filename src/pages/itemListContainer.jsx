import products from '../data/products';
import styles from "./itemListContainer.module.scss";
import ProductCard from '../components/ProductCard/ProductCard';

const ItemListContainer = ({ greetingMessage }) => {
    return (
        <div className={styles.container}>
            {/* Greeting message */}
            {greetingMessage && <h2 className={styles.greeting}>{greetingMessage}</h2>}
            
            {/* Products grid using ProductCard component */}
            <div className={styles.productsgrid}>
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;