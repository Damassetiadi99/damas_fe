import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token dari localStorage
    navigate("/"); // Arahkan kembali ke halaman login
  };

  // Jangan tampilkan navbar di halaman login atau register
  if (location.pathname === "/" || location.pathname === "/Register") {
    return null;
  }

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <span to="/" className="text-white text-2xl font-bold">
         GitHub  <span className="font-normal">Jobs</span>
        </span>
        <div>
         
          <button
            onClick={handleLogout}
            className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium ml-4"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
