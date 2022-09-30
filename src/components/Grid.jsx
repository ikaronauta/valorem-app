import { Tarjeta } from "./Tarjeta";
import styles from "../css/views/login/general.module.css";

export function Grid({ data }) {
  return (
    <div className={styles.grid}>
      {data.map((dat) => {
        return <Tarjeta key={dat.id} dat={dat} />;
      })}
    </div>
  );
}
