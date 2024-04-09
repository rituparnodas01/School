

"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import styles from "./Accordion.module.css"
import "../BootstrapClient"
const Accordion = () => {
  const [search, setSearch] = useState('');
  const [classValue, setClassValue] = useState('');


  const handleSearch = () => {
    
  };

  const handleReset = () => {
    
    setSearch('');
    setClassValue('');
  };

  return (
    <div className={styles.wrapper}>
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button class="accordion-button accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span>Search Section</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <form className={styles.form}>
          <div className={styles.label}>
            <label className={styles.label_items}>
              Code  : 
              <input
                className={styles.input_items}
                type="text"
                
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <label className={styles.label_items}>
              Name :
              <input
                className={styles.input_items}
                type="text"
                
                value={classValue}
                onChange={(e) => setClassValue(e.target.value)}
              />
            </label>
          </div>
          
          <div className={styles.btn_container}>
            <button className={styles.btn1} type="button" onClick={handleSearch}>
              <IoSearch /> Search
            </button>
            <button className={styles.btn2} type="button" onClick={handleReset}>
              <SlRefresh /> Reset
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
  </div>
</div>  
  );
};

export default Accordion;

{/* <form className={styles.form}>
          <div className={styles.label}>
            <label className={styles.label_items}>
              Code  : 
              <input
                className={styles.input_items}
                type="text"
                
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <label className={styles.label_items}>
              Name :
              <input
                className={styles.input_items}
                type="text"
                
                value={classValue}
                onChange={(e) => setClassValue(e.target.value)}
              />
            </label>
          </div>
          
          <div className={styles.btn_container}>
            <button className={styles.btn1} type="button" onClick={handleSearch}>
              <IoSearch /> Search
            </button>
            <button className={styles.btn2} type="button" onClick={handleReset}>
              <SlRefresh /> Reset
            </button>
          </div>
        </form> */}
