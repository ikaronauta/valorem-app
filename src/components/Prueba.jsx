import { useChangeTitleContext } from "../context/TitleProvider";

export function Prueba({ title }) {
  const cambiarTitulo = useChangeTitleContext();

  cambiarTitulo(title);

  return;
}
