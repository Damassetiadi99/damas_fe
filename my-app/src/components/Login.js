import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const data = [
    {
      email: "damas@gmail.com", 
      password: "123456"
    },
    {
      email: "damassetiadi@gmail.com", 
      password: "123456"
    }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = data.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("token", "dummy-token"); // Simpan token
      navigate("/home");
    } else {
      alert("Email atau password salah!");
    }
  };

  const handleRegisterRedirect = () => {
    navigate("/Register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <span
            onClick={handleRegisterRedirect}
            className="text-indigo-500 cursor-pointer hover:underline"
          >
            please click here for Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
