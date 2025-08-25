import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartWidget from "../cartWidget";
import styles from "./navBar.module.scss";

const NavBar = ({ logoImg, products }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const navigate = useNavigate();

    const categories = ["all", ...new Set(products.flatMap(p => p.category))];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === "all") {
        navigate("/");
        } else {
        navigate(`/category/${category}`);
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logoImg} alt="Logo" />
            </div>

            <div className={styles.categories}>
                {categories.map((cat, index) => (
                <Link 
                key={index} 
                to={cat === "all" ? "/" : `/category/${cat}`} 
                className={selectedCategory === cat ? styles.active : ""}
                >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Link>
                
                ))}
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;

