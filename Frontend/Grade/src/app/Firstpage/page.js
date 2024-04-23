"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from 'react';
import { IoSearch } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import { GrEdit } from "react-icons/gr";
import "./Firstpage.css"
import "../BootstrapClient"
import { FiPlusCircle } from "react-icons/fi";
import Link from 'next/link';
import Pagination from '../Pagination/page';
import { FaPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
const Firstpage = () => {
  const [search, setSearch] = useState('');
  const [classValue, setClassValue] = useState('');
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/tffs/AllGrades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify({
        //   // Your payload data here if needed
        // })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setGrades(data);
    console.log("dataaaa:",data)
    
    } catch (error) {
      console.error('Error fetching grades:', error);
    }
  };

  const handleSearch = () => {
    
  };

  const handleReset = () => {
    
    setSearch('');
    setClassValue('');
  };

  return (
<div className='whole-container'>
    <div className='wrapper'>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button class="accordion-button custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <span>Search Grade Structure</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
  <form>
    <div class='label'>
      <div class='row'>
        <label className='label_items'>
          Academic year:
          <span className='span'>*</span>
          <select
      className='input_items'

    >
      <option value="">All</option>
      <option value="Category 1">2023-2024</option>
      <option value="Category 2">2022-2023</option>
      <option value="Category 3">2021-2022</option>
    </select>
        </label>
        <label className='label_items label_isfinal'>
          Class:
          <input
            className='input_items input_isfinal'
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </label>
        <label className='label_items'>
          Status:
          <input
            className='input_items input_isfinal'
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </label>
      </div>
      <div class='row'>
        <label className='label_items '>
          Title:
          <input
            className='input_items label_title'
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </label>
        <label className='label_items'>
          Exam Category:
          <select
      className='input_items'

    >
      <option value="">All</option>
      <option value="Category 1">Academic</option>
      <option value="Category 2">Non-Academic</option>
      
    </select>
        </label>
      </div>
    </div>
    </form>



          
          <div className='btn_container'>
            <button className='btn1' type="button" onClick={handleSearch}>
              <IoSearch /> Search
            </button>
            <button className="btn2" type="button" onClick={handleReset}>
              <SlRefresh /> Reset
            </button>
          </div>
        

      </div>
    </div>
  </div>
  </div>

 </div>  
 <div className='add-new'>
  
  <h3 className='header'>Grade Structures</h3>

  <div className='input_box'>
 <Link href="/Newadded">
  <button className='button'> <FiPlusCircle/>Add New</button>
  </Link>
 </div>
 </div>
 <Pagination/>
 <div className='wrapper-2'>


    <table className='table'>
  <thead className='header'>
    <tr className='tr'>
      <th className='th'>Actions</th>
      <th className='th'>Academic Year</th>
      <th className='th'>Title</th>
      <th className='th'>Class</th>
      <th className='th'>Exam Category </th>
      <th className='th'>Status</th>
    </tr>
  </thead>
  <tbody>
  {grades ?.data ?.map((grade, index) => (
              <tr className='tr' key={index}>
                <td className='td'>
                  <Link href={`/Edit/${grade.id}`}>
                    <button className='button_edit'>
                      <GrEdit />
                    </button>
                  </Link>
                  <Link href={`/Edit/${grade.id}`}>
                    <button className='button_add'>
                      <FaPlus />
                    </button>
                  </Link>
                  <Link href={`/Edit/${grade.id}`}>
                    <button className='button_show'>
                      <FaEye />
                    </button>
                  </Link>
                </td>
                <td className='td'>{grade.academicyear}</td>
                <td className='td'>{grade.Title}</td>
                <td className='td'>{grade.class}</td>
                <td className='td'>{grade.examcategory}</td>
                <td className='td'>
  <span className={grade.Status === 'Active' ? 'Active' : 'inactive'}>
    {grade.Status}
  </span>
</td>


              </tr>
    ))}
  </tbody>
</table>

</div>
<Pagination/>
</div>
  );
};

export default Firstpage;
