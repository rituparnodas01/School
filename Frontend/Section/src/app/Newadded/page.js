"use client"
import { useState } from 'react';
import { TiTick } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';
import styles from "./Newadded.module.css"

function NewAdded() {
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:4000/tffs/CreateNewSection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, name }),
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }

      console.log('Data submitted successfully');
      setSubmitted(true);
      setCode('');
      setName('');
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error);
    }

  };
  setTimeout(() => {
    setSubmitted(false);
  }, 2000000000);
  const handleCancel = () => {

    setCode('');
    setName('');
  };

  return (
    <div className={styles.section_form}>
    
      <div className={styles.redbox}>
        (*) indicates Mandatory Fields.
      </div>
      <div className={styles.section_label}>Create New Section</div>
      <div className={styles.form_elements}>
        <div className={styles.section_name}>
          <label htmlFor="section">
            Code:<span className={styles.span}>*</span>
          </label>
          <input
            type="text"
            id="section"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className={styles.section_name}>
          <label htmlFor="name">
            Label:<span className={styles.span}>*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn1} type="button" onClick={handleSubmit}>
          <TiTick /> Submit
        </button>
        <button className={styles.btn2} type="button" onClick={handleCancel}>
          <RxCross2 /> Cancel
        </button>
      </div>
      {submitted && (
    <div className={styles.success_message}>
      <p>Data submitted successfully!</p>
    </div>
  )}
    </div>
  );
}

export default NewAdded;
