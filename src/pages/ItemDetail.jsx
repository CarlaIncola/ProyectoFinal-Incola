import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Counter from "../components/Counter";
import styles from "./itemDetail.module.scss";
import ItemCount from "../components/ItemCount";


const ItemDetail = ({ product, onAdd }) => {
    const [count, setCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
  
    if (!product) return <p>Cargando producto...</p>;
  
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
          <p className={styles.detailPrice}>Precio: ${product.price}</p>
          <p className={styles.detailDescription}>Ingredients: {product.description}</p>
          <p className={styles.detailCategory}>Categoría: {(product.category || []).join(", ")}</p>
    
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
            <p>✅ Producto agregado al carrito</p>
          )}
      </div>
    );
  };
  

export default ItemDetail;
