import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../services/products";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useContext(CartContext); // <- access CartContext

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    products
      .getById(id)
      .then((res) => setProduct(res))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  // Define handleAdd to send product + quantity to CartContext
  const handleAdd = (quantity) => {
    if (!product) return;
    addItem({ ...product, quantity });
  };

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found for id: {id}</p>;

  return <ItemDetail product={product} onAdd={handleAdd} />;
};

export default ItemDetailContainer;

