"use client"
import React,{useState} from 'react';
import Link from 'next/link';
import { GrEdit } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import Pagination from '../Pagination/page';

import styles from './Table.module.css'; // Import CSS file for styling

const Table = (props) => {
  const [data, setData] = useState([]);
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
  <Pagination totalPages={totalPages} />
</div>
</div>
  );
};

export default Table;

