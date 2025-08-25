import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import styles from "./cartWidget.module.scss";

const CartWidget = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen(!isOpen);

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div className={styles.cartContainer}>
        <button onClick={toggleCart} className={styles.cartButton}>
            <i className="fa-solid fa-cart-shopping"></i>
            {totalItems > 0 && <span className={styles.cartCount}>{totalItems}</span>}
        </button>

        {isOpen && (
            <div className={styles.cartDropdown}>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <span>{item.name}</span>
                    <span>Qty: {item.quantity}</span>
                    <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                    >
                    ❌
                    </button>
                </div>
                ))
            )}
            </div>
        )}
        </div>
    );
};

export default CartWidget;
