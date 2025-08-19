// src/components/cartWidget/useCart.js
import { useState, useEffect } from 'react';

// Singleton cart state
let globalCart = [];
let listeners = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener([...globalCart]));
};

export const useCart = () => {
  const [cart, setCart] = useState([...globalCart]);
  
  useEffect(() => {
    // Subscribe to changes
    const listener = (newCart) => setCart([...newCart]);
    listeners.push(listener);
    
    // Initial sync
    setCart([...globalCart]);
    
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const addToCart = (item) => {
    // Validate item structure
    if (!item.id || !item.quantity) {
      console.error('Invalid item added to cart:', item);
      return;
    }

    const existingIndex = globalCart.findIndex(i => i.id === item.id);
    
    if (existingIndex >= 0) {
        // Replace instead of sum
        globalCart[existingIndex] = { 
          ...globalCart[existingIndex], 
          quantity: item.quantity 
        };
      } else {
        globalCart.push({ ...item });
      }
    
    notifyListeners();
    console.log('Cart updated:', [...globalCart]);
  };

  const removeFromCart = (itemId) => {
    globalCart = globalCart.filter(item => item.id !== itemId);
    notifyListeners();
  };

  const totalItems = globalCart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cartItems: [...cart], // Always return a new array
    addToCart,
    removeFromCart,
    totalItems
  };
};