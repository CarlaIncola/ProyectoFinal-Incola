import styles from "./itemCount.module.scss";

const ItemCount = ({ count, stock, increase, decrease, onAdd }) => {
  return (
    <div className={styles.addToCartContainer}>
      <button
        className={`${styles.amountHandler} ${styles.handlerLeft}`}
        onClick={decrease}
        disabled={count <= 1}
      >
        -
      </button>
      <span className={styles.numberCount}>{count}</span>
      <button
        className={`${styles.amountHandler} ${styles.handlerRight}`}
        onClick={increase}
        disabled={count >= stock}
      >
        +
      </button>
      <button className={styles.addToCart} onClick={onAdd} disabled={stock === 0}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;

  
  