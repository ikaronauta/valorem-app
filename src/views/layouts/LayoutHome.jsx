import { Outlet, useNavigate } from "react-router-dom";
import analiticaLogo from "../../assets/img/layout/analitica-logo-menu.png";
import Swal from "sweetalert2";

// Importación Estilos
import styles from "../../css/general.module.css";
import navBar from "../../css/Navbar.module.css";
import {
  useChangeTitleContext,
  useTitleContext,
} from "../../context/TitleProvider";
import { useEffect } from "react";

export function LayoutHome() {
  const title = useTitleContext();
  const changeTitle = useChangeTitleContext();
  const navigate = useNavigate();

  useEffect(() => {
    changeTitle(null);
  }, []);

  const handleBack = () => {
    changeTitle("");
    sessionStorage.setItem("LEVEL", parseInt(sessionStorage.getItem("LEVEL")));
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
    sessionStorage.clear();
  };

  return (
    <main>
      <nav>
        <div className={navBar.navBar}>
          <div className={navBar.containerLogoTitle}>
            <div onClick={handleBack} className={navBar.sectionBack}>
              {title !== null ? <ion-icon name="chevron-back"></ion-icon> : ""}
            </div>
            <img
              src={analiticaLogo}
              alt="Analítica"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/home");
                changeTitle(null);
              }}
            />
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
          <div className={navBar.title} id="title">
            {title}
          </div>
        </div>
      </nav>
      <section className={styles.section}>
        <Outlet className={styles.outlet} />
      </section>
    </main>
  );
}
