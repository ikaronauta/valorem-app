import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../../services/loginService";
import Swal from "sweetalert2";
import { PulseLoader } from "react-spinners";
import { Icon } from "@ui5/webcomponents-react";

import styles from "../../css/general.module.css";
import ReactTooltip from "react-tooltip";

export function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [showHiden, setShowHiden] = useState("hide");
  const [tenant, setTenant] = useState("");
  const navigate = useNavigate();

  const handleShowHiden = () => {
    if (showHiden === "hide") {
      setShowHiden("show");
      document.getElementById("password").type = "text";
    } else {
      setShowHiden("hide");
      document.getElementById("password").type = "password";
    }
  };

  const handleLogin = () => {
    if (user === "" || pass === "" || tenant === "") {
      Swal.fire({
        title: "Datos Incompletos",
        text: "¡Debe ingresar toda la información para poder continuar!",
        confirmButtonColor: "#005DC9",
        confirmButtonText: "Siguiente",
        icon: "error",
      });
    } else {
      setLoading(true); //Se carga con TRUE para que se muestre el sppiner
      loginService(user, pass, tenant).then(resolve, reject); //Login

      function resolve(data) {
        //Solo los usuarios con estado "05" se pueden logear
        if (data.ID_ESTADO === "05") {
          sessionStorage.setItem("VALOREM_APP", data.USUARIO); //Se guarda el nombre de usuario en Sesion Storage
          sessionStorage.setItem("TENANT", data.tenant); //Se guarda el tenant en Sesion Storage

          let fechaVencimiento = new Date(
            data.FECHA_VENCIMIENTO
          ).toLocaleDateString();

          navigate("/home");
          setLoading(false); //Se carga con FALSE para que se deje de mostrar el sppiner

          //Se muestra alerta con información del usuario logeado
          Swal.fire({
            title: `Bienvenido ${data.USUARIO}`,
            text: `Fecha vencimiento clave: ${fechaVencimiento}`,
            confirmButtonColor: "#005DC9",
            confirmButtonText: "Siguiente",
            icon: "success",
          });
        } else {
          navigate("/");
          setLoading(false); //Se carga con FALSE para que se deje de muestre el sppiner

          //Se muestra alerta con el error que devolvio la API
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
        setLoading(false); //Se carga con FALSE para que se deje de muestre el sppiner
        console.log(data);

        //Se muestra alerta con el error que devolvio la API
        Swal.fire({
          title: data.code,
          text: data.message,
          confirmButtonColor: "#005DC9",
          confirmButtonText: "Cerrar",
          icon: "error",
        });
      }
    }
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
              value="VALOREM"
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
        <div className={styles.containerPass}>
          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            className={styles.inputPassword}
            onChange={(e) => {
              setPass(e.target.value.trim());
            }}
          />
          <Icon
            className={styles.icon}
            name={showHiden}
            onClick={handleShowHiden}
          />
        </div>
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
            <button
              className={styles.boton}
              data-tip
              data-for="change-password"
            >
              Cambiar Contraseña
            </button>
          </Link>
          <Link to="/unlock-user">
            <button className={styles.boton} data-tip data-for="unlock-user">
              Desbloquear Usuario
            </button>
          </Link>
          <Link to="/reset-pass">
            <button className={styles.boton} data-tip data-for="reset-pass">
              Restablecer contraseña
            </button>
          </Link>
        </div>
      </div>
      <ReactTooltip id="change-password" place="bottom" type="dark">
        Utilice esta opción si requiere cambiar su contraseña antes de la fecha
        límite de su expiración.
      </ReactTooltip>
      <ReactTooltip id="unlock-user" place="bottom" type="dark">
        Utilice esta opción si ingresó erradamente su contraseña más de 3 veces.
      </ReactTooltip>
      <ReactTooltip id="reset-pass" place="bottom" type="dark">
        Utilice esta opción si olvido su contraseña o expiró y es necesario
        asignar una nueva.
      </ReactTooltip>
    </>
  );
}
