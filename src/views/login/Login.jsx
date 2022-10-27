import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAuth } from "../../auth/loginAuth";
import Swal from "sweetalert2";
import { useUserSetAuth } from "../../context/AuthProvider";
import { PulseLoader } from "react-spinners";

import styles from "../../css/general.module.css";

export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const cargarUsuario = useUserSetAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user === "" || pass === "") {
      Swal.fire({
        title: "Datos Incompletos",
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      setLoading(true);
      loginAuth(user, pass).then(resolve, reject);

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
            title: data.result,
            text: data.message,
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "error",
          });
        }
      }

      function reject(data) {
        navigate("/");
        console.log(data);
        Swal.fire({
          title: "!Acceso denegado!",
          text: "Revisar en la consola el ERROR",
          confirmButtonColor: "#005DC9",
          confirmButtonText: "Siguiente",
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
        <input
          id="user"
          type="text"
          placeholder="Usuario"
          className={styles.input}
          onChange={(e) => {
            setUser(e.target.value.toUpperCase());
            document.getElementById("user").value =
              e.target.value.toUpperCase();
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
    </>
  );
}
