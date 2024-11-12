import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Importa App desde el archivo correcto

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
