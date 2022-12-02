import styles from "../css/components/ContenidoInterno.module.css";
import { BASE_URL, END_POINTS } from "../services/connections";

export function ContenidoInterno({ datosInternos }) {

  return (
    <div className={styles.contenedorPrincipal}>
      <ul>
        {datosInternos.map((dato) => {
          let item = dato.file;
          item = item.replace('https://valorem.sharepoint.com/:x:/r/', '');
          item = item.split('?d')[0];

          let url = `${BASE_URL}${END_POINTS.getFile}?user=${sessionStorage.getItem("VALOREM_APP")}&file=${item}&tenant=VAL`;
          
          return (
            <li key={Math.random * Math.random}>
              <a href={url}>{dato.desc}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
