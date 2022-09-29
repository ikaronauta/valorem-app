import { Outlet } from "react-router-dom";
import navBar from "../css/Navbar.module.css";
import analiticaLogo from "../assets/img/layout/analitica-logo-menu.png";

export function Layout() {
  return (
    <main>
      <nav>
        <div className={navBar.navBar}>
          <img src={analiticaLogo} alt="Analítica" />
          <p>Logout</p>
        </div>
        <div className={navBar.sectionLine}></div>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  )
}
