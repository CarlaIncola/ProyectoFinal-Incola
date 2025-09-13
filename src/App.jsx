import { useEffect, useState } from "react";
import { products as productService } from "./services/products";
import FilterByCategory from "./components/Filters/FilterByCategory";
import CartWidget from "./components/cartWidget"

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAll();
        setProducts(data);
      } catch (error) {
        console.error("Error al traer productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="App">
      <h1>Mi Tienda</h1>
      <FilterByCategory products={products} />
      <CartWidget />
    </div>
  );
}

export default App;
