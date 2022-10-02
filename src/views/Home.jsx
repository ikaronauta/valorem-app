import styles from "../css/general.module.css";
import { dataHome } from "../assets/data/dataHome";
import { Grid } from "../components/Grid";

export function Home() {
  return (
    <div className={styles.outlet}>
      <Grid datos={dataHome} />
    </div>
  );
}
