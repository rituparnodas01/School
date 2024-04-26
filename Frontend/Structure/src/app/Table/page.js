"use client"
import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { GrEdit } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import Pagination from '../Pagination/page';

import styles from './Table.module.css'; // Import CSS file for styling

const Table = (props) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState();
  const [totalPages, setTotalPages] = useState();
  const [recordsPerPage, setRecordsPerPage] = useState();

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/tffs/SS');
      const jsonData = await (response,data).json();
      setData(jsonData); 
      console.log("Dataaaa:",jsonData);
      setIsLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleRecordsPerPageChange = (value) => {
    setRecordsPerPage(value);
    setCurrentPage(1);
  };

  console.log('props:::',props)
  return (
    <div className={styles.wrapper}>
{props.isLoading ? (
        <div>Loading...</div>
  ) : ( 
    <>
    <div className={styles.pagination}>
    <Pagination totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onRecordsPerPageChange={handleRecordsPerPageChange}
              recordsPerPage={recordsPerPage} />
 </div>
 <table className={styles.table}>
  <thead className={styles.header}>
    <tr className={styles.tr}>
      <th className={styles.th}>Actions</th>
      <th className={styles.th}>Academic year</th>
      <th className={styles.th}>Class</th>
    </tr>
  </thead>
  <tbody>
    {props.data ?.map((item, index) => (
      <tr className={styles.tr} key={index}>
        <td className={styles.td}>
        <Link href="/Edit" >
          <button className={styles.button_edit} ><GrEdit/></button>
          </Link>
          <Link href="/Marks">
          <button className={styles.button_marks}><FaBook/></button>
       </Link>
        </td>
        <td className={styles.td}>{item.academicyear}</td>
        <td className={styles.td}>{item.class}</td>
      </tr>
    ))}
  </tbody>
</table>
    <div className={styles.pagination}>
  <Pagination totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              onRecordsPerPageChange={handleRecordsPerPageChange}
              recordsPerPage={recordsPerPage} />
</div>
</> 
)}
</div>
  );
};

export default Table;

