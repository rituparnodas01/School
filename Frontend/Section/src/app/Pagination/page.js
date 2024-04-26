"use client"
// import { useState } from 'react';
// import { AiOutlineLeft } from "react-icons/ai";
// import { AiOutlineRight } from "react-icons/ai";
// import styles from "./Pagination.module.css"
// const Pagination = ({ totalPages }) => {
//   const [currentPage, setCurrentPage] = useState(1);
// const total=10;
//   const handlePageChange = (pageNumber) => {
//     if (pageNumber >= 1 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     }
//   };

//   return (
//     <div className={styles.main_div}>
//       <span className={styles.span}>Page: 
//       <button className={styles.btn} onClick={() => handlePageChange(currentPage - 1)}><AiOutlineLeft/></button>
//       <div className={styles.page_no}>{currentPage}</div>
//       <button className={styles.btn} onClick={() => handlePageChange(currentPage + 1)}><AiOutlineRight/></button>
//        of 
//        <div className={styles.page_no}>{totalPages}
//        </div>
//        </span>
     
//       <div>
//         <span>View 
//         <select className={styles.select}>
//             <option>10</option>
//             <option>50</option>
//             <option>100</option>
//             <option>200</option>
//             <option>500</option>
//         </select>
//         records |</span>
//       </div>
      
//       <span className={styles.span}>
//         found total 
//         <div className={styles.page_no}>{total}</div>
//         records
//         </span>
      
//     </div>
//   );
// };

// export default Pagination;
"use client"
import { useState, useEffect } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import styles from "./Pagination.module.css";

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0); // State to store total records
  const [perPage, setPerPage] = useState(10); // State to store records per page

  // Function to fetch data from API
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/tffs/AllSection`);
      const data = await (response.data).json();
      // Assuming the API returns an object with a 'total' key representing total records
      console.log("data::",data);
      if (data && data.total) {
        setTotal(data.total);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
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

  return (
    <div className={styles.main_div}>
      <span className={styles.span}>Page: 
      <button className={styles.btn} onClick={() => handlePageChange(currentPage - 1)}><AiOutlineLeft/></button>
      <div className={styles.page_no}>{currentPage}</div>
      <button className={styles.btn} onClick={() => handlePageChange(currentPage + 1)}><AiOutlineRight/></button>
       of 
       <div className={styles.page_no}>{totalPages}</div>
       </span>
     
      <div>
        <span>View 
        <select 
          className={styles.select} 
          onChange={(e) => setPerPage(Number(e.target.value))}
          value={perPage}
        >
            <option>10</option>
            <option>50</option>
            <option>100</option>
            <option>200</option>
            <option>500</option>
        </select>
        records |</span>
      </div>
      
      <span className={styles.span}>
        found total 
        <div className={styles.page_no}>{total}</div>
        records
      </span>
      
    </div>
  );
};

export default Pagination;
