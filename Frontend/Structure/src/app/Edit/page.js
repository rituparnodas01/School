"use client"
import React from 'react';
import styles from "./Edit.module.css";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const SubjectStructure = () => {

    const [rowCount, setRowCount] = useState(0);
    const [rowDelete, setRowDelete] = useState(1);
  const handleAddRow = () => {
    setRowCount(rowCount + 1);
  };
  const handleDeleteRow = (indexToDelete) => {
 
    const updatedRowCount = rowCount - 1;

    const updatedRowDelete = rowDelete.filter((_, index) => index !== indexToDelete);
  

    setRowDelete(updatedRowDelete);
    setRowCount(updatedRowCount);
  };
  return (
    
<div className={styles.subjectStructureContainer}>
      <div className={styles.redBox}>
        <p>
          <span>(*) indicates Mandatory Fields</span>
        </p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.heading}>Edit Class with Subject structure</h2>
        <div className={styles.form_container}>
        <label className={styles.label}>Academic Year:
        <span className={styles.span}>*</span></label>
        <input className={styles.input} type="text" id="academicYear" name="academicYear" />

        <label className={styles.label}>Class:
        <span className={styles.span}>*</span></label>
        <input className={styles.input} type="text" id="class" name="class" />
      </div>
      <div>
      </div>
      <br/>
      <br/>
        <hr className={styles.hr}/>
        <br/>
        <h2 className={styles.heading_2}>First Language</h2>
<table className={styles.table}>
  <thead className={styles.header}>
    <tr className={styles.tr}>
      <th className={styles.th}>Select Subject</th>
      <th className={styles.th}>Action</th>
    </tr>
  </thead>
  <tbody>
    {[...Array(rowCount)].map((_, index) => (
      <tr className={styles.tr} key={index}>
        <td className={styles.td}>
          <select className={styles.select}></select>
        </td>
        <td className={styles.td}>
          {index !== 0 && ( 
            <button onClick={() => handleDeleteRow(index)} className={styles.cancelButton}>
              <RxCross2 />
            </button>
          )}
        </td>
      </tr>
    ))}
    <button onClick={handleAddRow} className={styles.addMoreAction}>
  <FaPlus/> Add More</button>
  </tbody>
  
</table>
<hr className={styles.hr}/>

    <br/>    
        <h2 className={styles.heading_2}>Compulsory Subjects</h2>
<table className={styles.table}>
  <thead className={styles.header}>
    <tr className={styles.tr}>
      <th className={styles.th}>Select Subject</th>
      <th className={styles.th}>Action</th>
    </tr>
  </thead>
  <tbody>
    {[...Array(rowCount)].map((_, index) => (
      <tr className={styles.tr} key={index}>
        <td className={styles.td}>
          <select className={styles.select}></select>
        </td>
        <td className={styles.td}>
          {index !== 0 && ( 
            <button onClick={() => handleDeleteRow(index)} className={styles.cancelButton}>
              <RxCross2 />
            </button>
          )}
        </td>
      </tr>
    ))}
    <button onClick={handleAddRow} className={styles.addMoreAction}>
  <FaPlus/> Add More
</button>
  </tbody>
  
</table>
<hr className={styles.hr}/>


</div>
</div>
  );
};

export default SubjectStructure;