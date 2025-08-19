import useNav from "./useNav";
import CartWidget from "../cartWidget";
import styles from "./navBar.module.scss";

const NavBar = ({ logoText = "Logo", navLinks = [] }) => {
    const { isMenuOpen, toggleMenu } = useNav();

    return (
        <nav className={styles.navbar}>
            
            <div style={{ fontSize: "1.5rem" }}>{logoText}</div>

            <ul style={{
                display: isMenuOpen ? "flex" : "none",
                listStyle: "none",
                gap: "1rem",
                }}>
                {navLinks.map((link, index) => (
                <li key={index}>
                    <a href={link.path} className={styles.links}>
                    {link.name}
                    </a>
                </li>
                ))}
            </ul>

            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <button 
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    style={{ background: "none", border: "none" }}
                    >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;