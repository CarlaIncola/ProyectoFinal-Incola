// src/components/TextField/index.jsx
import React from 'react';
import styles from "./textField.module.scss";

const TextField = ({ 
  name, 
  type = "text", 
  id, 
  label, 
  value, 
  onChange = () => {}, // Default empty function
  readOnly = false,
  ...props 
}) => {
  return (
    <div className={styles.textField}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        {...props}
      />
    </div>
  );
};

export default TextField;