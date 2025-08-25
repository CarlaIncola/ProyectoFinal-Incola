import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import styles from "./itemListContainer.module.scss";

const ItemListContainer = ({ products, greeting }) => {
    const { category } = useParams();
    const [displayedProducts, setDisplayedProducts] = useState([]);

    useEffect(() => {
        if (!products) return;

        const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(
            category
                ? products.filter((p) => p.category.includes(category))
                : products
            );
        }, 500);
        });

        getProducts.then((res) => setDisplayedProducts(res));
    }, [category, products]);

    if (!products) return <p>Loading products...</p>;

    return (
        <div className={styles.itemsListContainer}>
        <h2 className={styles.greeting}>{greeting}</h2>
        
        <ItemList products={displayedProducts} />
        </div>
    );
};

export default ItemListContainer;

