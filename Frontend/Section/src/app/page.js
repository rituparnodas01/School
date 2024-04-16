import Accordion from "./Accordion/page";
import styles from "./page.module.css";
import AddNew from "./AddNew/page";
import Table from "./Table/page";

export default function Home() {
  return (
    <main className={styles.main}>
<Accordion/>
{/* <AddNew/> */}
{/* <Table/> */}
    </main>
  );
}
