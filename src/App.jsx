import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routers";
import LoginCard from "./pages/Login";

function App() {
  const [authToken, setAuthToken] = useState(null);

  /// Función que se invoca cuando el usuario inicia sesión con éxito. Recibe un token como argumento.
  const handleLogin = (token) => {
    setAuthToken(token);
    /// Guarda el token en localStorage para que persista incluso si el usuario recarga la página. 
    /// Permite que la aplicación recuerde que el usuario está autenticado.
    localStorage.setItem("authToken", token); // guardar el token en localStorage para persistencia
  };

  return (
    <>
      {/* si authToken es null (usuario no inició sesión) si no es null se renderiza el routerprovider que maneja el enrutamiento de la aplicación */}
      {!authToken ? (
        // onLogin es un prop (le asignamos la función handleLogin) para pasar una función desde el componente App.jsx a Login.jsx
        <LoginCard onLogin={handleLogin} />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}

export default App;