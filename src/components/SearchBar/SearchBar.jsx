import React from 'react';
import styles from './searchBar.module.scss';
import ProductList from './ProductList';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className={styles.searchSection}>
        
        <i className="fa-solid fa-magnifying-glass"></i>
        
        <input
        type="text"
        className={styles.searchInput}
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        />
        
    </div>
  );
};

export default SearchBar;