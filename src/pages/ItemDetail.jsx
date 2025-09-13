import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Counter from "../components/Counter";
import styles from "./itemDetail.module.scss";
import ItemCount from "../components/ItemCount";

const ItemDetail = ({ product, onAdd, isAdded }) => {
  if (!product) return <p>Cargando producto...</p>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {(product.category || []).join(", ")}</p>
      {!isAdded && <ItemCount stock={product.stock} onAdd={onAdd} />}
    </div>
  );
};

export default ItemDetail;