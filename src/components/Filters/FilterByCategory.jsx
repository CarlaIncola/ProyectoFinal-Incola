import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./filter.module.scss";

const FilterByCategory = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!products || products.length === 0) return <p>Loading products...</p>;

  const categories = [
    "all",
    ...Array.from(
      new Set(
        products.flatMap((p) =>
          (p.category || []).map((c) => c?.toLowerCase()).filter(Boolean)
        )
      )
    ),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) =>
          (product.category || []).some((cat) => cat?.toLowerCase() === selectedCategory)
        );

  return (
    <div className={styles.container}>
      <div className={styles.categoryButtons}>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={selectedCategory === cat ? styles.active : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.productGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default FilterByCategory;
