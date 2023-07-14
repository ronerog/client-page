import { BrowserRouter, Route, Routes } from "react-router-dom";



import { Login } from "../pages/Login/Login";
import { HomePage } from "../pages/HomePage/HomePage";
import { Boletos } from "../pages/Boletos/Boletos";

import { User } from "../pages/User/User";
import { Carteirinha } from "../pages/Carteirinha/Carteirinha";

import Sidebar from '../pages/components/SideBar/SideBar';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<><div className="page"><Sidebar/><HomePage/></div></>} />
        <Route path="/user" element={<><div className="page"><Sidebar/><User/></div></>} />
        <Route path="/boletos" element={<><div className="page"><Sidebar/><Boletos/></div></>} />
        <Route path="/carteirinha" element={<><div className="page"><Sidebar/><Carteirinha/></div></>} />
        <Route path="*" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
  );
}
