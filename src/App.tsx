import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/authenticate";
import AboutUs from "./pages/AboutUs";
import ProductCategory from "./pages/ProductCategory";
import Profile from "./pages/Profile";
import Template from "./templates/Template/Template";

function App() {
  return (
    <Template>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/perfil" element={<Profile />} />
        </Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/categoria-produtos" element={<ProductCategory />} />
      </Routes>
    </Template>
  );
}

export default App;
