import styles from "../css/components/ContenidoInterno.module.css";

export function ContenidoInterno({ datosInternos }) {
  return (
    <div className={styles.contenedorPrincipal}>
      <ul>
        {datosInternos.map((dato) => {
          return (
            <li key={Math.random * Math.random}>
              <a href={dato.file}>{dato.desc}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
