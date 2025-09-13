import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products as productService } from "../services/products";
import ItemDetail from "./ItemDetail";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const allProducts = await productService.getAll();
        const item = allProducts.find((p) => p.id === id);
        setProduct(item);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAdd = (quantity) => {
    addToCart({ ...product, quantity });
    setIsAdded(true);
  };

  return <ItemDetail product={product} onAdd={handleAdd} isAdded={isAdded} />;
};

export default ItemDetailContainer;
