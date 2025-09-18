import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Counter from "../components/Counter";
import styles from "./itemDetail.module.scss";
import ItemCount from "../components/ItemCount";


const ItemDetail = ({ product, onAdd }) => {
    const [count, setCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
  
    if (!product) return <p>Loading product...</p>;
  
    const increase = () => count < product.stock && setCount(count + 1);
    const decrease = () => count > 1 && setCount(count - 1);
  
    const handleAddClick = () => {
      onAdd(count);
      setIsAdded(true);
      setCount(1);
    };
  
    return (
      <div className={styles.detailContainer} style={{ border: "1px solid #ccc", padding: "1rem" }}>
        {product.image && (
          <img 
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
        )}
          <h2 className={styles.detailName}>{product.name}</h2>
          <p className={styles.detailPrice}>Price: ${product.price}</p>
          <p className={styles.detailDescription}><strong>Product detail:</strong> {product.description}</p>
    
          {product.stock === 0 ? (
            <p>❌ Out of stock</p>
          ) : !isAdded ? (
            <ItemCount
              count={count}
              stock={product.stock}
              increase={increase}
              decrease={decrease}
              onAdd={handleAddClick}
            />
          ) : (
            <p>✅ Product added to cart</p>
          )}
      </div>
    );
  };
  

export default ItemDetail;
