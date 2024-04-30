"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { SlRefresh } from 'react-icons/sl';
import { GrEdit } from "react-icons/gr";
import "./Firstpage.css"
import "../BootstrapClient"
import { FiPlusCircle } from "react-icons/fi";
import Link from 'next/link';
import Pagination from '../Pagination/page';
const Firstpage = () => {
  const [search, setSearch] = useState('');
  const [classValue, setClassValue] = useState('');


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
        <span>Search Exam Term List</span>
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
          <input
            className='input_items'
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label className='label_items label_isfinal'>
          is final:
          <input
            className='input_items input_isfinal'
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </label>
      </div>
      <div class='row'>
        <label className='label_items'>
          Class:
          <input
            className='input_items'
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
        </label>
        <label className='label_items'>
          Status:
          <input
            className='input_items'
            type="text"
            value={classValue}
            onChange={(e) => setClassValue(e.target.value)}
          />
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
  
  <h3 className='header'>Exam Term List</h3>

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
      <th className='th'>is final</th>
      <th className='th'>Gen.Routine</th>
      <th className='th'>Gen.admit card</th>
      <th className='th'>Academic Year </th>
      <th className='th'>Class</th>
      <th className='th'>Term Name</th>
      <th className='th'>Order</th>
      <th className='th'>Status</th>
    </tr>
  </thead>
  <tbody>
    {[...Array(10)].map((_, index) => (
      <tr className='tr' key={index}>
        <td className='td'>
        <Link href="/Edit">
        <button className='button_edit'>
          <GrEdit />
         
        </button>
      </Link>
      
        </td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
        <td className='td'></td>
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
