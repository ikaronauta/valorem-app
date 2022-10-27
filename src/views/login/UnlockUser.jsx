import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { unlockUserAuth } from "../../auth/unlockUserAuth";
import styles from "../../css/general.module.css";

export function UnlockUser() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleUnlockUser = () => {
    console.log(user);
    if (user === "") {
      Swal.fire({
        title: "Datos Incompletos",
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      const respuesta = unlockUserAuth(user);
      respuesta.then(resolve, reject);

      function resolve(data) {
        console.log(data);
        if (data.result === "OK") {
          Swal.fire({
            title: data.message.substring(0, 42),
            html: `<p>Nueva contraseña: <b style='color:red'>${data.message.substring(
              50
            )}</b></p></br><p>La nueva contraseña es temporal y no le sirve para iniciar sesión, primo debe cambiarla.</p>`,
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "success",
          });
          navigate("/change-password");
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
      }
    }
  };

  return (
    <div className={styles.contenedor}>
      <h1>PORTAL DE SERVICIO</h1>
      <input
        type="text"
        placeholder="Usuario"
        className={styles.input}
        onChange={(e) => {
          setUser(e.target.value);
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
  );
}
