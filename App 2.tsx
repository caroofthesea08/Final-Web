import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages /Login";
/*import Clientes from "./pages/Clients";
import Marketing from "./pages/Marketing";*/
import Stock from "./pages /Stock";
import Tests from "./pages /Tests";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Stock" element={<Stock />} />
      <Route path="/tests" element={<Tests />} />
    </Routes>
  );
};

export default App;
