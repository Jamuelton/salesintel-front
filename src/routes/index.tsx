import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
