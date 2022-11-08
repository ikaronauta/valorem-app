import { createContext, useContext, useState } from "react";

const dataContext = createContext();
const dataSetContext = createContext();

export function useDataContext() {
  return useContext(dataContext);
}

export function useDataSetContext() {
  return useContext(dataSetContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const loadData = (datos) => {
    setData(datos);
  };

  return (
    <dataContext.Provider value={data}>
      <dataSetContext.Provider value={loadData}>
        {children}
      </dataSetContext.Provider>
    </dataContext.Provider>
  );
}
