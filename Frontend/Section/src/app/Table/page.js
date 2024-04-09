// import React from 'react';
// import Link from 'next/link';
// import { GrEdit } from "react-icons/gr";

// import Pagination from '../Pagination/page';

// import styles from './Table.module.css'; 

// const Table = ({ searchData }) => {
//   const totalPages = 10;
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.pagination}>
//         <Pagination totalPages={totalPages} />
//       </div>

//       <table className={styles.table}>
//         <thead className={styles.header}>
//           <tr className={styles.tr}>
//             <th className={styles.th}>Actions</th>
//             <th className={styles.th}>Code</th>
//             <th className={styles.th}>Name</th>
//           </tr>
//         </thead>
//         <tbody>
//           {searchData.map((item, index) => (
//             <tr className={styles.tr} key={index}>
//               <td className={styles.td}>
//                 <Link href={`/Edit/${item.id}`}> {}
//                   <button className={styles.button_edit}>
//                     <GrEdit />
//                   </button>
//                 </Link>
//               </td>
//               <td className={styles.td}>{item.code}</td> 
//               <td className={styles.td}>{item.name}</td> 
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* <div className={styles.pagination}>
//         <Pagination totalPages={totalPages} />
//       </div> */}
//     </div>
//   );
// };

// export default Table;
"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GrEdit } from "react-icons/gr";
import Pagination from '../Pagination/page';
import styles from './Table.module.css'; 

const Table = () => {
  const [data, setData] = useState([]);
  const totalPages = 10; // You may fetch this dynamically from API if needed

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/tffs/AllSection');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.pagination}>
        <Pagination totalPages={totalPages} />
      </div>

      <table className={styles.table}>
        <thead className={styles.header}>
          <tr className={styles.tr}>
            <th className={styles.th}>Actions</th>
            <th className={styles.th}>Code</th>
            <th className={styles.th}>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td}>
                <Link href={`/Edit/${item.id}`}>
                  <button className={styles.button_edit}>
                    <GrEdit />
                  </button>
                </Link>
              </td>
              <td className={styles.td}>{item.code}</td> 
              <td className={styles.td}>{item.name}</td> 
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default Table;
