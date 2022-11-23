import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { unlockUserService } from "../../services/unlockUserService";
import { PulseLoader } from "react-spinners";

import styles from "../../css/general.module.css";

export function UnlockUser() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUnlockUser = () => {
    if (user === "" || email === "" || tenant === null) {
      Swal.fire({
        title: "Datos Incompletos",
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      setLoading(true);
      unlockUserService(user, email, tenant).then(resolve, reject);

      function resolve(data) {
        if (data.result === "OK") {
          Swal.fire({
            title: data.result,
            text: data.message,
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "success",
          });
          navigate("/");
        } else {
          Swal.fire({
            title: data.result,
            text: data.message,
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "error",
          });
        }
      }

      function reject(data) {
        console.log(data);
        Swal.fire({
          title: data.code,
          text: data.message,
          confirmButtonColor: "#005DC9",
          confirmButtonText: "Cerrar",
          icon: "error",
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <PulseLoader className={styles.sppiner} color="#005dc9" size={50} />
      ) : (
        ""
      )}
      <div className={styles.contenedor}>
        <h1>PORTAL DE SERVICIO</h1>
        <div className={styles.groupRadios}>
          <div className={styles.containerRadio}>
            <input
              className={styles.radio}
              id="r1"
              type="radio"
              name="opciones"
              value=""
              onChange={(e) => {
                setTenant(e.target.value);
              }}
            />
            <label htmlFor="r1">HANA VALOREM</label>
          </div>
          <div className={styles.containerRadio}>
            <input
              className={styles.radio}
              id="r2"
              type="radio"
              name="opciones"
              value="D1"
              onChange={(e) => {
                setTenant(e.target.value);
              }}
            />
            <label htmlFor="r2">HANA D1</label>
          </div>
        </div>
        <input
          id="user"
          type="text"
          placeholder="Usuario"
          className={styles.input}
          onChange={(e) => {
            setUser(e.target.value.toUpperCase().trim());
            document.getElementById("user").value =
              e.target.value.toUpperCase();
          }}
        />
        <input
          id="email"
          type="email"
          placeholder="Email"
          className={styles.input}
          onChange={(e) => {
            setEmail(e.target.value.trim());
          }}
        />
        <div className={styles.grupoBotones}>
          <Link to="/">
            <button className={styles.boton}>Volver</button>
          </Link>
          <button className={styles.boton} onClick={handleUnlockUser}>
            Desbloquear Usuario
          </button>
        </div>
      </div>
    </>
  );
}
