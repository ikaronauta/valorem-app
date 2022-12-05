import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { changePasswordService } from "../../services/changePasswordService";
import { PulseLoader } from "react-spinners";
import { Icon } from "@ui5/webcomponents-react";

import styles from "../../css/general.module.css";

export function ChangePassword() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatNewPass, setRepeatNewPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [tenant, setTenant] = useState(null);

  const navigate = useNavigate();

  const handleShowHiden = (e) => {
    if (e.target.name === "hide") {
      e.target.name = "show";
      document.getElementById(e.target.previousElementSibling.id).type = "text";
    } else {
      e.target.name = "hide";
      document.getElementById(e.target.previousElementSibling.id).type =
        "password";
    }
  };

  const handleChangePassword = () => {
    if (
      user === "" ||
      pass === "" ||
      newPass === "" ||
      repeatNewPass === "" ||
      tenant === null
    ) {
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
      changePasswordService(user, pass, newPass, tenant).then(resolve, reject);

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
        <div className={styles.containerPass}>
          <input
            id="password"
            type="password"
            placeholder="Contraseña Actual"
            className={styles.inputPassword}
            onChange={(e) => {
              setPass(e.target.value.trim());
            }}
          />
          <Icon
            className={styles.icon}
            name="hide"
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
              setNewPass(e.target.value.trim());
            }}
          />
          <Icon
            className={styles.icon}
            name="hide"
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
              setRepeatNewPass(e.target.value.trim());
            }}
          />
          <Icon
            className={styles.icon}
            name="hide"
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
        <p className={styles.politicasPass}>
          Políticas de clave: utilizar letras (minúsculas y mayúsculas) ,
          números, caracteres especiales. Debe contener mínimo 16 caracteres y
          no coincidir con las últimas 5 claves.
        </p>
      </div>
    </>
  );
}
