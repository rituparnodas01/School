// import React from 'react'
// import styles from "./Edit.module.css";
// import { TiTick } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";
// function SectionForm() {
//   return (
//     <div className={styles.section_form}>
//     <div className={styles.redbox}>
//         (*) indicates Mandatory Fields.
//     </div>
//       <div className={styles.section_label}>Section 
//       </div>
//       <div className={styles.form_elements}>
//       <div className={styles.section_name}>
//         <label htmlFor="section">Code:
//         <span className={styles.span}>*</span></label>
//         <input type="text" id="section" />
//       </div>
//       <div className={styles.section_name}>
//         <label htmlFor="name">Name: 
//         <span className={styles.span}>*</span></label>
//         <input type="text" id="name"  />
//       </div>
//       </div>
//       <div className={styles.btn_container}>
//             <button className={styles.btn1} type="button" >
//               <TiTick/> Update
//             </button>
//             <button className={styles.btn2} type="button">
//               <RxCross2/> Cancel
//             </button>
//           </div>
//     </div>
//   )
// }

// export default SectionForm;
"use client"
import React, { useState, useEffect } from 'react';
import styles from "./Edit.module.css";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function SectionForm() {
  const [sectionData, setSectionData] = useState({
    code: "",
    name: ""
  });

  const [id, setId] = useState(""); 

  useEffect(() => {

    if (id) {
      fetch(`http://localhost:4000/tffs/EditSection/${id}`)
        .then(response => response.json())
        .then(data => {
          setSectionData(data); // Set retrieved data to state
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]); // Fetch data whenever ID changes

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSectionData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = () => {
    // Send updated data to the server
    fetch(`http://localhost:4000/tffs/EditSection/${id}`, {
      method: 'PUT', // Assuming you are using PUT method for updating data
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sectionData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data updated successfully:', data);
      // Handle success, e.g., show a success message to the user
    })
    .catch(error => {
      console.error('Error updating data:', error);
      // Handle error, e.g., show an error message to the user
    });
  };

  return (
    <div className={styles.section_form}>
      <div className={styles.redbox}>
        (*) indicates Mandatory Fields.
      </div>
      <div className={styles.section_label}>Section</div>
      <div className={styles.form_elements}>
        <div className={styles.section_name}>
          <label htmlFor="code">Code: <span className={styles.span}>*</span></label>
          <input type="text" id="code" value={sectionData.code} onChange={handleInputChange} />
        </div>
        <div className={styles.section_name}>
          <label htmlFor="name">Name: <span className={styles.span}>*</span></label>
          <input type="text" id="name" value={sectionData.name} onChange={handleInputChange} />
        </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn1} type="button" onClick={handleFormSubmit}>
          <TiTick/> Update
        </button>
        <button className={styles.btn2} type="button">
          <RxCross2/> Cancel
        </button>
      </div>
    </div>
  );
}

export default SectionForm;
