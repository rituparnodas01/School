// pages/index.js
"use client"
 

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import "./Firstsection.css";
import "../BootstrapClient"
import Table from '../Table/page';
import AddNew from '../AddNew/page';
const FirstSection = () => {

  const [classValue, setClassValue] = useState('');
  const [code, setCode] = useState('');
  const [tableData, setTableData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!code) {
      fetchData();
    } else {
      try {
        const responseSearch = await fetch('http://localhost:4000/tffs/SSS', {
         
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code,classValue }),
        });
        console.log("Search",responseSearch);
        if (!responseSearch.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await responseSearch.json();

        // const dataFromResponse = responseData.data;
     
        setTableData(responseData.data);

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:4000/tffs/SS', {
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
      console.log("tabledataaa::",tableData)
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
      setData([]);
    }
  };
  const handleReset = () => {
    
    setCode('');
    setClassValue('');
  };
  useEffect(() => {
    fetchData();
  }, [])
  return (
<div className='wrapper'>
 <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Search Class Subject Structure
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <form className='form'>
          <div className='label'>
            <label className='label_items'>
              Academic Year : <span className='span'>*</span>
              <input
                className='input_items'
                type="text"
                placeholder="2020-21"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </label>
            <label className='label_items'>
              Class :<span className='span'>*</span>
              <input
                className='input_items'
                type="text"
                placeholder="Class XI"
                value={classValue}
                onChange={(e) => setClassValue(e.target.value)}
              />
            </label>
          </div>
          
          <div className='btn_container'>
            <button className='btn1' type="button" onClick={handleSearch}>
              <IoSearch /> Search
            </button>
            <button className='btn2 'type="button" onClick={handleReset}>
              <SlRefresh /> Reset
            </button>
          </div>
        </form>

      </div>
    </div>
  </div>
  </div>
  <AddNew/>
  <Table data={tableData} isLoading={isLoading} />
</div>  
  );
};

export default FirstSection;
