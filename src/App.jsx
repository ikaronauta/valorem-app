import { Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { LayoutHome } from "./views/layouts/LayoutHome";
import { LayoutLogin } from "./views/layouts/LayoutLogin";
import { ChangePassword } from "./views/login/ChangePassword";
import { Login } from "./views/login/Login";
import { UnlockUser } from "./views/login/UnlockUser";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutLogin />}>
        <Route index element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/unlock-user" element={<UnlockUser />} />
      </Route>

      <Route path="/home" element={<LayoutHome />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
