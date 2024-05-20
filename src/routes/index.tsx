import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { Home } from "../pages/home";
import { Products } from "../pages/products";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};
