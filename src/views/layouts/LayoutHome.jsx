import { Link, Outlet, useNavigate } from "react-router-dom";
import analiticaLogo from "../../assets/img/layout/analitica-logo-menu.png";

// Importación Estilos
import styles from "../../css/general.module.css";
import navBar from "../../css/Navbar.module.css";

export function LayoutHome() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <main>
      <nav>
        <div className={navBar.navBar}>
          <div className={navBar.containerLogoTitle}>
            <div onClick={handleBack} className={navBar.sectionBack}>
              <ion-icon name="chevron-back"></ion-icon>
            </div>
            <Link to="/home">
              <img src={analiticaLogo} alt="Analítica" />
            </Link>
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button className={navBar.button}>
              <ion-icon name="power"></ion-icon>
              Log Off
            </button>
          </Link>
        </div>
        <div className={navBar.sectionLine}>
          <div className={navBar.title} id="title"></div>
        </div>
      </nav>
      <section>
        <Outlet className={styles.outlet} />
      </section>
    </main>
  );
}
