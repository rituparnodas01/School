import styles from "./page.module.css"
import FirstSection from "@/app/Firstsection/page";
import AddNew from "./AddNew/page"; 
import Table from "./Table/page";
export default function Home() {
  return (
    <main className={styles.main}>
      <FirstSection/>

    </main>
  );
}
