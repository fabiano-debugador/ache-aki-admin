import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Profile from "./pages/Profile";
import Template from "./templates/Template/Template";
function App() {
  return (
    <Template>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="perfil" element={<Profile />} />
      </Routes>
    </Template>
  );
}

export default App;
