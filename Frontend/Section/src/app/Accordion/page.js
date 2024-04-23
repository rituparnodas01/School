

"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import styles from "./Accordion.module.css"
import Table from '../Table/page';
import AddNew from '../AddNew/page';
import "../BootstrapClient";

const Accordion = () => {
  const [code, setCode] = useState('');
  const [tableData, setTableData] = useState([]);
  const [classValue, setClassValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!code) {
      fetchData();
    } else {
      try {
        const response = await fetch('http://localhost:4000/tffs/SearchSection', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code: code, name: classValue }),
        });
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();

        const dataFromResponse = responseData.data;
     
        setTableData(responseData.data);

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:4000/tffs/AllSection', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setTableData(responseData.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setData([]);
    }
  };

  const handleReset = () => {
    setCode('');
    setClassValue('');
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button accordion" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <span>Search Section</span>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <form className={styles.form}>
                  <div className={styles.label}>
                    <label className={styles.label_items}>
                      Code:
                      <input
                        className={styles.input_items}
                        type="text"
                        placeholder='D'
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                      />
                    </label>
                    <label className={styles.label_items}>
                      Name:
                      <input
                        className={styles.input_items}
                        type="text"
                        placeholder='Section - A'
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
        <br />
        <AddNew />
        <br />

        <Table data={tableData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Accordion;
