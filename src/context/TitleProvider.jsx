import { useContext, createContext, useState } from "react";

const titleContext = createContext();
const changeTitleContext = createContext();

export function useTitleContext() {
  return useContext(titleContext);
}

export function useChangeTitleContext() {
  return useContext(changeTitleContext);
}

export function TitleProvider({ children }) {
  const [title, setTitle] = useState(null);
  const changeTitle = (title) => setTitle(title);
  return (
    <titleContext.Provider value={title}>
      <changeTitleContext.Provider value={changeTitle}>
        {children}
      </changeTitleContext.Provider>
    </titleContext.Provider>
  );
}
