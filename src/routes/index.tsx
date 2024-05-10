import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Login } from "../pages/login";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
