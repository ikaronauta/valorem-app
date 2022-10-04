import styles from "../../css/general.module.css";
import { Link, Outlet } from "react-router-dom";
import navBar from "../../css/Navbar.module.css";
import analiticaLogo from "../../assets/img/layout/analitica-logo-menu.png";

export function LayoutHome() {
  return (
    <main>
      <nav>
        <div className={navBar.navBar}>
          <Link to="/home">
            <img src={analiticaLogo} alt="Analítica" />
          </Link>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <button className={navBar.button}>
              <ion-icon name="log-out-outline"></ion-icon>
              Log Off
            </button>
          </Link>
        </div>
        <div className={navBar.sectionLine}></div>
      </nav>
      <section>
        <Outlet className={styles.outlet} />
      </section>
    </main>
  );
}
