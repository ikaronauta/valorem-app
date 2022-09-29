import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Layout } from "./views/Layout";
import { Login } from "./views/Login";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Layout />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
