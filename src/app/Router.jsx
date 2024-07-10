import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Areas from "../pages/Areas";
import Logros from "../pages/Logros";
import Mejoras from "../pages/Mejoras";
import Ideas from "../pages/Ideas";
import Objetivos from "../pages/Objetivos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/logros" element={<Logros />} />
        <Route path="/mejoras" element={<Mejoras />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/objetivos" element={<Objetivos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
