import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";
import logo from "../../assets/images/logos/vurger-logo.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
// Import category icons
import burgerIcon from "../../assets/images/icons/burger1.png";
import cakeIcon from "../../assets/images/icons/cake.png";
import friesIcon from "../../assets/images/icons/fries.png";
import saladIcon from "../../assets/images/icons/salad.png";
// import sandwichIcon from "../../assets/images/icons/sandwich.png";
// import cartIcon from "../../assets/images/icons/cart.png";

const NavBar = () => {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className={styles.navbar}>
  <div className={styles.left}>
    <Link to="/">
      <img src={logo} alt="Vurger Logo" className={styles.logo} />
    </Link>
  </div>

  <div className={styles.centerLinks}>
    <Link className={styles.linkItem} to="/">
      <span>Catálogo</span>
    </Link>

    <Link className={styles.linkItem} to="/category/burgers">
      <img src={burgerIcon} alt="Burgers" />
      <span>Burgers</span>
    </Link>

    <Link className={styles.linkItem} to="/category/salads">
      <img src={saladIcon} alt="Salads" />
      <span>Salads</span>
    </Link>

    <Link className={styles.linkItem} to="/category/sandwiches">
      <img src={burgerIcon} alt="Sandwiches" />
      <span>Sandwiches</span>
    </Link>

    <Link className={styles.linkItem} to="/category/accompaniments">
      <img src={friesIcon} alt="Accompaniments" />
      <span>Accompaniments</span>
    </Link>

    <Link className={styles.linkItem} to="/category/coffee">
      <img src={cakeIcon} alt="Coffee" />
      <span>Coffee</span>
    </Link>
  </div>

  <div className={styles.right}>
    <Link className={styles.linkItem} to="/cart" style={{ position: "relative" }}>
      {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
      <span><i class="fa-solid fa-cart-shopping"></i></span>
    </Link>

    <Link className={styles.linkItem} to="/checkout">
      <span>Checkout</span>
    </Link>
  </div>
</nav>

  );
};

export default NavBar;

  
