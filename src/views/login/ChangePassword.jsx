import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { changePasswordAuth } from "../../auth/changePasswordAuth";
import { PulseLoader } from "react-spinners";
import { Icon } from "@ui5/webcomponents-react";

import styles from "../../css/general.module.css";

export function ChangePassword() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatNewPass, setRepeatNewPass] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleShowHiden = (e) => {
    if (e.target.name === "show") {
      e.target.name = "hide";
      document.getElementById(e.target.previousElementSibling.id).type = "text";
    } else {
      e.target.name = "show";
      document.getElementById(e.target.previousElementSibling.id).type =
        "password";
    }
  };

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
      setLoading(true);
      changePasswordAuth(user, pass, newPass).then(resolve, reject);

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
        <div className={styles.containerPass}>
          <input
            id="password"
            type="password"
            placeholder="Contraseña Actual"
            className={styles.inputPassword}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Icon
            className={styles.icon}
            name="show"
            onClick={(e) => {
              handleShowHiden(e);
            }}
          />
        </div>
        <div className={styles.containerPass}>
          <input
            id="newPassword"
            type="password"
            placeholder="Contraseña Nueva"
            className={styles.inputPassword}
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
          />
          <Icon
            className={styles.icon}
            name="show"
            onClick={(e) => {
              handleShowHiden(e);
            }}
          />
        </div>
        <div className={styles.containerPass}>
          <input
            id="repeatNewPassword"
            type="password"
            placeholder="Repetir Contraseña"
            className={styles.inputPassword}
            onChange={(e) => {
              setRepeatNewPass(e.target.value);
            }}
          />
          <Icon
            className={styles.icon}
            name="show"
            onClick={(e) => {
              handleShowHiden(e);
            }}
          />
        </div>
        <div className={styles.grupoBotones}>
          <Link to="/">
            <button className={styles.boton}>Volver</button>
          </Link>
          <button className={styles.boton} onClick={handleChangePassword}>
            Cambiar Contraseña
          </button>
        </div>
      </div>
    </>
  );
}
