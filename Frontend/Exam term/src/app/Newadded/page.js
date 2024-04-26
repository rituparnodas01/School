"use client"
import React from 'react'
import styles from "./Newadded.module.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function NewAdded() {
  const handleCancel = () => {

    setCode('');
    setName('');
  };
  return (
    <div className={styles.section_form}>
    <div className={styles.redbox}>
        (*) indicates Mandatory Fields.
    </div>
      <div className={styles.section_label}>Create Book List
      </div>
      <div className={styles.form_elements}>
      <div className={styles.section_name}>
        <label htmlFor="section">Academic Year:
        <span className={styles.span}>*</span></label>
        <input type="text" id="section" />
      </div>
      <hr/>
      <div className={styles.section_name}>
        <label htmlFor="name">Class: 
        <span className={styles.span}>*</span></label>
        <input type="text" id="name"  />
      </div>
      <hr/>
      </div>
      <div className={styles.btn_container}>
            <button className={styles.btn1} type="button" >
              <TiTick/> Submit
            </button>
            <button className={styles.btn2} type="button" onClick={handleCancel}>
              <RxCross2/> Cancel
            </button>
          </div>
    </div>
  )
}

export default NewAdded;