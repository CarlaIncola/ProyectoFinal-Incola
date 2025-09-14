import { Link } from "react-router-dom";
import styles from "./navBar.module.scss";
import logo from "../../assets/images/logos/vurger-logo.png"

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="Vurger Logo" className={styles.logo} />
        </Link>
  
        {/* Navigation links */}
        <div className={styles.links}>
          <Link to="/">Catálogo</Link>
          <Link to="/category/burgers">Hamburguesas</Link>
          <Link to="/category/salads">Ensaladas</Link>
          <Link to="/category/sandwiches">Sandwiches</Link>
          <Link to="/cart">Carrito</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </nav>
    );
  };
  
  export default NavBar;
  
