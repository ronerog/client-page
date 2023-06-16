import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/Login";
import { HomePage } from "../pages/HomePage/HomePage";
import { Boletos } from "../pages/Boletos/Boletos";
import { Config } from "../pages/Config/Config";
import { User } from "../pages/User/User";
import { Carteirinha } from "../pages/Carteirinha/Carteirinha";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/carteirinha" element={<Carteirinha />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}
