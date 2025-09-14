import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products as productService } from "../services/products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await productService.getAll();
        const filtered = category
          ? allProducts.filter((p) =>
              (p.category || []).map((c) => c.toLowerCase()).includes(category.toLowerCase())
            )
          : allProducts;
        setProducts(filtered);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) return <p>Cargando productos...</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
