import styles from "../css/components/ContenidoInterno.module.css";

export function ContenidoInterno({ datos }) {
  console.log(datos);
  return (
    <div className={styles.contenedorPrincipal}>
      <ul>
        {datos.map((dato) => {
          return <li key={dato.id}>{dato.content}</li>;
        })}
      </ul>
    </div>
  );
}
