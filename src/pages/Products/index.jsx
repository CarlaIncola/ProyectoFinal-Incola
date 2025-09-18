import { useEffect, useState } from "react";
import { products } from "../../services/products";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await products.getAll();
        setItems(data);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {items.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
