import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routers";
import Login from "./pages/Login";
import "./components/styles/App.css"

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem("authToken", token);
  };

  if (!authToken) {
    return <Login onLogin={handleLogin} />;
  }

  return <RouterProvider router={router} />;
}

export default App;