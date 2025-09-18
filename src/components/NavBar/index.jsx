import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";
import logo from "../../assets/images/logos/vurger-logo.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import burgerIcon from "../../assets/images/icons/burger1.png";
import cakeIcon from "../../assets/images/icons/cake.png";
import friesIcon from "../../assets/images/icons/fries.png";
import saladIcon from "../../assets/images/icons/salad.png";
import drinksIcon from "../../assets/images/icons/drinks.png";
import allIcon from "../../assets/images/icons/all.png";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const navClass = (isActive) => `${styles.linkItem} ${isActive ? styles.active : ""}`;

  return (
    <nav className={styles.navbar}>

      <div className={styles.left}>
        <NavLink to="/" className={styles.brand}>
          <img src={logo} alt="Vurger Logo" className={styles.logo} />
        </NavLink>
      </div>

      <div className={styles.centerLinks}>
        <NavLink to="/" className={({ isActive }) => navClass(isActive)}>
          <img src={allIcon} alt="All" />
          <span>All</span>
        </NavLink>

        <NavLink to="/category/burgers" className={({ isActive }) => navClass(isActive)}>
          <img src={burgerIcon} alt="Burgers" />
          <span>Burgers</span>
        </NavLink>

        <NavLink to="/category/salads" className={({ isActive }) => navClass(isActive)}>
          <img src={saladIcon} alt="Salads" />
          <span>Salads</span>
        </NavLink>
        
        <NavLink to="/category/accompaniments" className={({ isActive }) => navClass(isActive)}>
          <img src={friesIcon} alt="Accompaniments" />
          <span>Side dishes</span>
        </NavLink>

        <NavLink to="/category/coffee" className={({ isActive }) => navClass(isActive)}>
          <img src={cakeIcon} alt="Coffee" />
          <span>Coffee</span>
        </NavLink>

        <NavLink to="/category/drinks" className={({ isActive }) => navClass(isActive)}>
          <img src={drinksIcon} alt="Drinks" />
          <span>Drinks</span>
        </NavLink>
      </div>

      <div className={styles.right}>
        <NavLink to="/cart">
          <span className={styles.cartWrapper} aria-hidden>
            <i className="fa-solid fa-cart-shopping" />
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </span>
        </NavLink>

        <NavLink to="/checkout" className={({ isActive }) => navClass(isActive)}>
          <span>Checkout</span>
        </NavLink>
      </div>

    </nav>
  );
};

export default NavBar;