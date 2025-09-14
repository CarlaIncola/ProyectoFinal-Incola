// src/components/ItemCount/index.jsx
const ItemCount = ({ count, stock, increase, decrease, onAdd }) => {
    return (
      <div>
        <button onClick={decrease} disabled={count <= 1}>
          -
        </button>
        <span style={{ margin: "0 1rem" }}>{count}</span>
        <button onClick={increase} disabled={count >= stock}>
          +
        </button>
        <button onClick={onAdd} disabled={stock === 0}>
          Add to cart
        </button>
      </div>
    );
  };
  
  export default ItemCount;
  
  