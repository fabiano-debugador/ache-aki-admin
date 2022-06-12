import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Menu from "./components/Menu/Menu";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
