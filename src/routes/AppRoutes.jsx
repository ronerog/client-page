import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { Boletos } from "../pages/Boletos";
import { Config } from "../pages/Config";
import { User } from "../pages/User";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/user" element={<User />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}
