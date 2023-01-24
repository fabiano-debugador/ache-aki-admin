import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/authenticate";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import ProductCategory from "./pages/ProductCategory";
import Profile from "./pages/Profile";
import Template from "./templates/Template/Template";

function App() {
  return (
    <Template>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Profile />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/categoria-produtos" element={<ProductCategory />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Template>
  );
}

export default App;
