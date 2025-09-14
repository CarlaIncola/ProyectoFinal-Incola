import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Counter from "../components/Counter";
import styles from "./itemDetail.module.scss";
import ItemCount from "../components/ItemCount";


const ItemDetail = ({ product, onAdd }) => {
  const [count, setCount] = useState(1);

  if (!product) return <p>Cargando producto...</p>;

  const increase = () => {
    if (count < product.stock) {
      setCount((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleAddClick = () => {
    onAdd(count); // ✅ send the selected count to ItemDetailContainer
    setCount(1);  // (optional) reset to 1 after adding
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {(product.category || []).join(", ")}</p>

      <ItemCount
        count={count}
        stock={product.stock}
        increase={increase}
        decrease={decrease}
        onAdd={handleAddClick} // ✅ call our wrapper instead of directly onAdd
      />
    </div>
  );
};

export default ItemDetail;
