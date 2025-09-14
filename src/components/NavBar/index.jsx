import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";
import logo from "../../assets/images/logos/vurger-logo.png";

// Import category icons
import burgerIcon from "../../assets/images/icons/burger.png";
// import saladIcon from "../../assets/images/icons/salad.png";
// import sandwichIcon from "../../assets/images/icons/sandwich.png";
// import cartIcon from "../../assets/images/icons/cart.png";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Vurger Logo" className={styles.logo} />
      </Link>

      <div className={styles.links}>
        <Link className={styles.linkItem} to="/">
          <span>Catálogo</span>
        </Link>

        <Link className={styles.linkItem} to="/category/burgers">
          <img src={burgerIcon} alt="Hamburguesas" />
          <span>Hamburguesas</span>
        </Link>

        <Link className={styles.linkItem} to="/category/salads">
          <img src={burgerIcon} alt="Ensaladas" />
          <span>Ensaladas</span>
        </Link>

        <Link className={styles.linkItem} to="/category/sandwiches">
          <img src={burgerIcon} alt="Sandwiches" />
          <span>Sandwiches</span>
        </Link>

        <Link className={styles.linkItem} to="/cart">
          <img src={burgerIcon} alt="Carrito" />
          <span>Carrito</span>
        </Link>

        <Link className={styles.linkItem} to="/checkout">
          <span>Checkout</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

  
