import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import '../components/styles/LoginStyle.css';

const Login = ({ onLogin }) => {

    // useState para manejar el estado de los campos de entrada del formulario
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Manejador de form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //Realiza una solicitud POST a la API de inicio de sesión
            const response = await fetch("http://localhost:3000/api/login", { // Cambia la URL aquí
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });

            //Obtiene la respuesta en formato JSON
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("authToken", data.token);
                localStorage.setItem("username", username);
                localStorage.setItem("email", data.user.email);

                //Si la respuesta es correcta, guarda el token y el nombre de usuario en localStorage
                onLogin(data.token); //Llama a la función onLogin pasada como prop, pasando el token
            } else {
                alert("Login failed: " + data.message); //Muestra un mensaje de error si el login falla
            }
        } catch (error) {
            console.error("Error:", error); // Maneja cualquier error durante la solicitud
            alert("Error while trying to log in");
        }
    };

    return (
        <>
            <main className="LoginMain">
                <div className='wrapper'>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <FaLock className="icon" />
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember Me</label>
                            <a href="#">Forgot Password?</a>
                        </div>

                        <button type="sumbit">Login</button>

                        <div className="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Login;