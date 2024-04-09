"use client"
import React, { useState } from 'react';
import styles from "./AddNew.module.css";
import { FiPlusCircle } from "react-icons/fi";
import Link from 'next/link';
const AddNew = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
<div className={styles.container}>
  
    <h3 className={styles.header}>Section</h3>
 
  <div className={styles.input_box}>
  <Link href="/Newadded">
    <button className={styles.button} > <FiPlusCircle/>Add New</button>
    </Link>
  </div>
</div>

    
  );
};

export default AddNew;
