
"use client"
// import React, { useState, useEffect } from 'react';
// import styles from "./Edit.module.css";
// import { TiTick } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";

// function EditSection() {
//   const [sectionData, setSectionData] = useState({
//     code: "",
//     name: ""
//   });

//   const [id, setId] = useState(""); 

//   useEffect(() => {

//     if (id) {
//       fetch(`http://localhost:4000/tffs/EditSection/${t_rel_section_id}`)
//         .then(response => response.json())
//         .then(data => {
//           setSectionData(data); // Set retrieved data to state
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//         });
//     }
//   }, [id]);


//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setSectionData(prevState => ({
//       ...prevState,
//       [id]: value
//     }));
//   };

//   // Function to handle form submission
//   const handleFormSubmit = () => {
//     // Send updated data to the server
//     fetch(`http://localhost:4000/tffs/EditSection/${t_rel_section_id}`, {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(sectionData)
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Data updated successfully:', data);

//     })
//     .catch(error => {
//       console.error('Error updating data:', error);

//     });
//   };

//   return (
//     <div className={styles.section_form}>
//       <div className={styles.redbox}>
//         (*) indicates Mandatory Fields.
//       </div>
//       <div className={styles.section_label}>Section</div>
//       <div className={styles.form_elements}>
//         <div className={styles.section_name}>
//           <label htmlFor="code">Code: <span className={styles.span}>*</span></label>
//           <input type="text" id="code" value={sectionData.code} onChange={handleInputChange} />
//         </div>
//         <div className={styles.section_name}>
//           <label htmlFor="name">Name: <span className={styles.span}>*</span></label>
//           <input type="text" id="name" value={sectionData.name} onChange={handleInputChange} />
//         </div>
//       </div>
//       <div className={styles.btn_container}>
//         <button className={styles.btn1} type="button" onClick={handleFormSubmit}>
//           <TiTick/> Update
//         </button>
//         <button className={styles.btn2} type="button">
//           <RxCross2/> Cancel
//         </button>
//       </div>
//     </div>
//   );
// }

// export default EditSection;
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router

function EditSection() {
  const [sectionData, setSectionData] = useState({
    code: "",
    name: ""
  });

  const router = useRouter(); // Use useRouter hook

  useEffect(() => {
    const { id } = router.query; // Get ID from router query
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
  }, [router.query]); // Listen to changes in router query

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSectionData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleFormSubmit = () => {
    const { id } = router.query; // Get ID from router query
    fetch(`http://localhost:4000/tffs/EditSection/${id}`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sectionData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Data updated successfully:', data);
    })
    .catch(error => {
      console.error('Error updating data:', error);
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
          Update
        </button>
        <button className={styles.btn2} type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default EditSection;
