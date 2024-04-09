import React from 'react'
import styles from "./Edit.module.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
function SectionForm() {
  return (
    <div className={styles.section_form}>
    <div className={styles.redbox}>
        (*) indicates Mandatory Fields.
    </div>
      <div className={styles.section_label}>Section 
      </div>
      <div className={styles.form_elements}>
      <div className={styles.section_name}>
        <label htmlFor="section">Code:
        <span className={styles.span}>*</span></label>
        <input type="text" id="section" />
      </div>
      <div className={styles.section_name}>
        <label htmlFor="name">Name: 
        <span className={styles.span}>*</span></label>
        <input type="text" id="name"  />
      </div>
      </div>
      <div className={styles.btn_container}>
            <button className={styles.btn1} type="button" >
              <TiTick/> Update
            </button>
            <button className={styles.btn2} type="button">
              <RxCross2/> Cancel
            </button>
          </div>
    </div>
  )
}

export default SectionForm;
