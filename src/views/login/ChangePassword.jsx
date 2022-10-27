import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { changePasswordAuth } from "../../auth/changePasswordAuth";
import styles from "../../css/general.module.css";

export function ChangePassword() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatNewPass, setRepeatNewPass] = useState("");

  const navigate = useNavigate();

  const handleChangePassword = () => {
    if (user === "" || pass === "" || newPass === "" || repeatNewPass === "") {
      Swal.fire({
        title: "Datos Incompletos",
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else if (pass === newPass) {
      Swal.fire({
        title: "Datos Incorrectos",
        text: "¡La nueva contraseña debe ser diferente a la contraseña antigua!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else if (newPass !== repeatNewPass) {
      Swal.fire({
        text: "¡Las contraseñas no coinciden!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      const respuesta = changePasswordAuth(user, pass, newPass);
      respuesta.then(resolve, reject);

      function resolve(data) {
        console.log(data);
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
      }
    }
  };

  return (
    <div className={styles.contenedor}>
      <h1>PORTAL DE SERVICIO</h1>
      <input
        id="user"
        type="text"
        placeholder="Usuario"
        className={styles.input}
        onChange={(e) => {
          setUser(e.target.value.toUpperCase());
          document.getElementById("user").value = e.target.value.toUpperCase();
        }}
      />
      <input
        type="password"
        placeholder="Contraseña Actual"
        className={styles.input}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Contraseña Nueva"
        className={styles.input}
        onChange={(e) => {
          setNewPass(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Repetir Contraseña"
        className={styles.input}
        onChange={(e) => {
          setRepeatNewPass(e.target.value);
        }}
      />
      <div className={styles.grupoBotones}>
        <Link to="/">
          <button className={styles.boton}>Volver</button>
        </Link>
        <button className={styles.boton} onClick={handleChangePassword}>
          Cambiar Contraseña
        </button>
      </div>
    </div>
  );
}
