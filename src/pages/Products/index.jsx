// components/ProductsList.jsx
import { useEffect, useState } from "react";
import { products } from "../../services/products";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("🟢 Componente montado");
    const fetchData = async () => {
      try {
        const data = await products.getAll();
        console.log("🛒 Data recibida en componente:", data);
        setItems(data);
      } catch (error) {
        console.error("Error al traer productos:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {items.map((prod) => (
          <li key={prod.id}>{prod.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
