import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span style={{ margin: "0 1rem" }}>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)} style={{ marginLeft: "1rem" }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
