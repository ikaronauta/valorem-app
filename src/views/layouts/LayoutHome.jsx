import { Link, Outlet, useNavigate } from "react-router-dom";
import analiticaLogo from "../../assets/img/layout/analitica-logo-menu.png";
import Swal from "sweetalert2";

// Importación Estilos
import styles from "../../css/general.module.css";
import navBar from "../../css/Navbar.module.css";
import { useUserSetAuth } from "../../context/AuthProvider";

export function LayoutHome() {
  const navigate = useNavigate();
  const cargarUsuario = useUserSetAuth();

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogOff = () => {
    Swal.fire({
      text: "¿Está seguro que desea cerrar la sesión?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#005DC9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) logOff();
    });
  };

  const logOff = () => {
    navigate("/");
    cargarUsuario({});
    localStorage.clear();
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
          <button
            className={navBar.button}
            onClick={() => {
              handleLogOff();
            }}
          >
            <ion-icon name="power"></ion-icon>
            Log Off
          </button>
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
