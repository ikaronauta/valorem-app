import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserSetAuth } from "../context/AuthProvider";
import { LoginAuth } from "./LoginAuth";

export function IniciarSesion(user, pass) {
  debugger;
  const cargarUsuario = useUserSetAuth();
  const navigate = useNavigate();

  const promesa = LoginAuth(user, pass);
  promesa.then(resolve, reject);

  function resolve(data) {
    if (data.ID_ESTADO === "05") {
      let fechaVencimiento = new Date(
        data.FECHA_VENCIMIENTO
      ).toLocaleDateString();
      cargarUsuario(data);
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

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserSetAuth } from "../context/AuthProvider";

export const LoginAuth = async (user, pass) => {
  const cargarUsuario = useUserSetAuth();

  const navigate = useNavigate();

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
