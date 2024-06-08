import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { Home } from "../pages/home";
import { Products } from "../pages/products";
import { Sales } from "../pages/sales";
import { AuthProvider } from "../config/auth/AuthProvider";
import { PrivateRoutes } from "../config/privateRoutes";

export const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes redirectPath={"/login"} />}>
            <Route path="/dashboard" element={<Home />} />
          </Route>
          <Route element={<PrivateRoutes redirectPath={"/login"} />}>
            <Route path="/products" element={<Products />} />
          </Route>
          <Route element={<PrivateRoutes redirectPath={"/login"} />}>
            <Route path="/sales" element={<Sales />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};
