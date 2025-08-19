// src/components/cartWidget/index.jsx
import { useState } from 'react';
import { useCart } from './useCart';

const CartWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems, totalItems } = useCart();

    console.log('Current cart:', cartItems); // Debug


    return (
        <div className="cart-widget" style={{ position: 'relative' }}>
                {/* Cart Icon with Badge will go here when I define it */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                position: 'relative',
                fontSize: '1.5rem'
                }}
            >
                <i className="fa-solid fa-cart-shopping"></i>
                {totalItems > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem'
                        }}>
                        {totalItems}
                    </span>
                )}
            </button>

            {/* Dropdown Cart Content will go here */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '100%',
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    padding: '1rem',
                    minWidth: '250px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    zIndex: 100
                    }}>
                    
                    <h3 style={{ marginTop: 0 }}>Your Cart</h3>

                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {cartItems.map(item => (
                                <li key={item.id} style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    marginBottom: '0.5rem',
                                    paddingBottom: '0.5rem',
                                    borderBottom: '1px solid #eee'
                                    }}>
                                    <span>{item.name}</span>
                                    <span>Qty: {item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default CartWidget;