import React, { useState } from 'react';
import { useCart } from '../cartWidget/useCart';
import styles from "./productCard.module.scss";
import Counter from '../counter';

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const qtyToAdd = Math.max(1, Number(quantity) || 1);
    addToCart({
      ...product,
      quantity: qtyToAdd
    });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  // Check if this product is already in cart
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <div className={styles.productcard}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <Counter 
        quantity={quantity}
        onIncrement={() => setQuantity(prev => prev + 1)}
        onDecrement={() => setQuantity(prev => Math.max(1, prev - 1))}
        onChange={(newValue) => {
          const validatedQty = Math.max(1, Number(newValue) || 1);
          setQuantity(validatedQty);
        }}
      />
      
      <button 
        onClick={handleAddToCart}
        className={styles.addToCartBtn}
      >
        Add to Cart ({quantity})
      </button>

      {isInCart && (
        <button 
          onClick={handleRemoveFromCart}
          className={styles.removeBtn}
        >
          <i class="fa-solid fa-trash-can"></i>
        </button>
      )}
    </div>
  );
};

export default ProductCard;
