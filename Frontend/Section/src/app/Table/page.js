import React from 'react';
import Link from 'next/link';
import { GrEdit } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import Pagination from '../Pagination/page';

import styles from './Table.module.css'; // Import CSS file for styling

const Table = () => {
  const totalPages = 10;
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
    {[...Array(10)].map((_, index) => (
      <tr className={styles.tr} key={index}>
        <td className={styles.td}>
        <Link href="/Edit">
        <button className={styles.button_edit}>
          <GrEdit />
         
        </button>
      </Link>
      
        </td>
        <td className={styles.td}></td>
        <td className={styles.td}></td>
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

