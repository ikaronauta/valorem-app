export function ContenidoInterno({ datos }) {
  console.log(datos[0].datos);
  return (
    <ul>
      {datos[0].datos.map((dato) => {
        return <li>{dato.content}</li>;
      })}
    </ul>
  );
}
