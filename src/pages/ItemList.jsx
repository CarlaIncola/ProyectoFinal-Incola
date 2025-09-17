import Item from "./Item";
import ProductCard from "../components/ProductCard/ProductCard";
import styles from "./itemList.module.scss";

const ItemList = ({ products }) => {
  return (
    <div className={styles.itemList} style={{ display: "flex", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;

