import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Counter from "../components/Counter";
import styles from "./itemDetail.module.scss";

const ItemDetail = ({ product }) => {
    const { id, name, price, image, description } = product;
    const { addToCart } = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => setQuantity((prev) => prev + 1);
    const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    const handleChange = (value) => setQuantity(Number(value) || 1);

    const handleAddToCart = () => { 
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className={styles.detailCard}>
        <img src={image} alt={name} className={styles.detailImage} />
        <div className={styles.detailInfo}>
            <h2 className={styles.detailName}>{name}</h2>
            <p className={styles.detailDescription}>{description}</p>
            <p className={styles.detailPrice}>${price}</p>

            <div className={styles.addToCart}>
                <Counter
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onChange={handleChange}
                />

                <button onClick={handleAddToCart} className={styles.detailButton}>
                Add to Cart
                </button>
            </div>
        </div>
        </div>
    );
};

export default ItemDetail;
