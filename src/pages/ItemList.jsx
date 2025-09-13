import Item from "./Item";
import ProductCard from "../components/ProductCard/ProductCard";

const ItemList = ({ products }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

