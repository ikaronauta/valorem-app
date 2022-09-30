import { Outlet } from "react-router-dom";
import navBar from "../../css/Navbar.module.css";
import analiticaLogo from "../../assets/img/layout/analitica-logo-menu.png";
import { FaPowerOff } from "react-icons/fa";

export function LayoutHome() {
  return (
    <main>
      <nav>
        <div className={navBar.navBar}>
          <img src={analiticaLogo} alt="Analítica" />
          <button className={navBar.button}>
          <FaPowerOff />
          Log Off
          </button> 
        </div>
        <div className={navBar.sectionLine}></div>
      </nav>
      <section>
        <Outlet />
      </section>
    </main>
  );
}
