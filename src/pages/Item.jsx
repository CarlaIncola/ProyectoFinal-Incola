import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./item.module.scss";

const Item = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className={styles.itemCard} onClick={handleClick} style={{ cursor: "pointer" }}>
        <img src={product.image} alt={product.name} className={styles.itemImage} />
        <h3 className={styles.itemName}>{product.name}</h3>
        <p className={styles.itemPrice}>${product.price}</p>
        </div>
    );
};

export default Item;
