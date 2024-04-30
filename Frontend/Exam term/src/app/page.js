import Image from "next/image";
import styles from "./page.module.css";
import Firstpage from "./Firstpage/page";

export default function Home() {
  return (
    <main className={styles.main}>
      <Firstpage/>
    </main>
  );
}
