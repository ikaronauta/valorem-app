const handleLogin = async () => {
  const url = `https://valoremanalitica.bpmco.co/login?user=${user}&pass=${pass}`;
  const result = await axios.get(url);
  const response = JSON.parse(result.data.slice(1, -1));

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
