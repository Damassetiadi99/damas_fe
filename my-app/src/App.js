import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register"
import Detail from "./components/Detail";

const App = () => {
  const token = localStorage.getItem("token"); // Atau ambil dari tempat penyimpanan lain jika perlu

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to="/" replace />}
        />
        <Route
          path="/detail/:id"
          element={token ? <Detail /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
