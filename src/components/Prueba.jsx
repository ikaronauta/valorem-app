import { useDataContext } from "../context/DataProvider";

export function Prueba() {
  const datos = useDataContext();
  console.log(datos);
  return <h2>OKKKK</h2>;
}
