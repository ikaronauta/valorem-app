import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../css/general.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { useUserSetAuth } from "../../context/AuthProvider";

export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const cargarUsuario = useUserSetAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    const url = `https://valoremanalitica.bpmco.co/login?user=${user}&pass=${pass}`;
    const result = await axios.get(url);
    const response = JSON.parse(result.data.slice(1, -1));

    cargarUsuario(response);

    let fechaVencimiento;

    if (user === "" || pass === "") {
      Swal.fire({
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      if (response.hasOwnProperty("ID_ESTADO")) {
        localStorage.setItem("VALOREM_APP_LOGGED", JSON.stringify(response));
        fechaVencimiento = new Date(
          response.FECHA_VENCIMIENTO
        ).toLocaleDateString();
        navigate("/home");
        Swal.fire({
          title: `Bienvenido ${response.USUARIO}`,
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
