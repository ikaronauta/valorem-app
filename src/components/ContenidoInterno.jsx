import styles from "../css/components/ContenidoInterno.module.css";
import { BASE_URL, END_POINTS } from "../services/connections";

export function ContenidoInterno({ datosInternos }) {
  return (
    <div className={styles.contenedorPrincipal}>
      <ul>
        {datosInternos.map((dato) => {
          let url;

          if (dato.file.includes("sharepoint")) {
            let item = dato.file;
            item = item.replace("https://valorem.sharepoint.com/:x:/r/", "");
            item = item.split("?d")[0];
            item = item.split("/")[item.split("/").length - 1];

            url = `${BASE_URL}${END_POINTS.getFile}/${item}`;
          } else {
            url = dato.file;
          }

          return (
            <li key={Math.random()}>
              <a href={url} target="_blank" rel="noreferrer">
                {dato.desc}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
