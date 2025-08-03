// src/components/cartWidget/useCart.js
import { useState } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
            setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === item.id);
            
            if (existingItem) {
                return prevItems.map(i => 
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }

            return [...prevItems, { ...item, quantity: 1 }];
            });
    };

    const removeFromCart = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return {
        cartItems,
        addToCart,
        removeFromCart,
        totalItems
    };
};