import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/general.module.css";
import { LoginAuth } from "../../auth/LoginAuth";
import Swal from "sweetalert2";
import { useUserSetAuth } from "../../context/AuthProvider";

export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const cargarUsuario = useUserSetAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "" || pass === "") {
      Swal.fire({
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      const promesa = LoginAuth(user, pass);
      promesa.then(resolve, reject);

      function resolve(data) {
        if (data.ID_ESTADO === "05") {
          let fechaVencimiento = new Date(
            data.FECHA_VENCIMIENTO
          ).toLocaleDateString();
          cargarUsuario(data);
          localStorage.setItem("VALOREM_APP", data.USUARIO);
          navigate("/home");

          Swal.fire({
            title: `Bienvenido ${data.USUARIO}`,
            text: `Fecha vencimiento clave: ${fechaVencimiento}`,
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "success",
          });
        } else {
          navigate("/");
          Swal.fire({
            text: "¡Datos incorrectos!",
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "error",
          });
        }
      }

      function reject(data) {
        navigate("/");
        Swal.fire({
          title: "!Acceso denegado!",
          text: data.message + " - " + data.code,
          confirmButtonColor: "#005DC9",
          confirmButtonText: "Siguiente",
          icon: "error",
        });
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
      <input
        type="password"
        placeholder="Contraseña"
        className={styles.input}
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <div className={styles.grupoBotones}>
        <button
          className={styles.boton}
          onClick={() => {
            handleLogin();
          }}
        >
          Iniciar Sesión
        </button>
        <Link to="/change-password">
          <button className={styles.boton}>Cambiar Contraseña</button>
        </Link>
        <Link to="/unlock-user">
          <button className={styles.boton}>Desbloquear Usuario</button>
        </Link>
      </div>
    </div>
  );
}
