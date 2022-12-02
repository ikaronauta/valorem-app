import axios from "axios";


export const getPrueba = async () => {
  
  const url = "https://valoremanalitica.bpmco.co/getFile?user=CPEDRAZA&file=it/HanaAplicaciones/01.%20TENANT%20VALOREM/04.%20CARACOL/01.%20INFORME%20DE%20JUNTA/P01_PROCESOS_CARGA.xlsm&tenant=VAL";
  const result = await axios.get(url);
  // const response = result.data;

  return result;
};
