import { Outlet } from "react-router-dom";
import { MenuInterno } from "../components/MenuInterno";

export function VistaInterna({ datos }) {
  return (
    <div>
      <MenuInterno datos={datos} />
      <Outlet />
    </div>
  );
}
