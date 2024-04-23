"use client"
import React, { useState } from 'react';
import styles from "./AddNew.module.css";
import { FiPlusCircle } from "react-icons/fi";
const AddNew = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
<div className={styles.container}>
  <div className={styles.header}>
    <h3>Class wise Subject Structure</h3>
  </div>
  <div className={styles.input_box}>
    <button className={styles.button} > <FiPlusCircle/>Add New</button>
  </div>
</div>

    
  );
};

export default AddNew;
