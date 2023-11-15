import React, { useState } from "react";
import { useAuth } from "../ruteo/AuthContext";
import { useNavigate } from "react-router-dom";

// Para verificar que no registre con el mismo correo
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../conexion/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterForm() {
  const { register } = useAuth(); // Registra usuario

  const [email, setEmail] = useState(""); // Variables para correo
  const [password, setPassword] = useState(""); // Variable para password

  const navigate = useNavigate(); // Navegación

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate("/sistema-crud/applista"); // Redirigir a ruta /iniciarsesion
      toast.success("Se registro con exito."); // Mensaje
    } catch (error) {
      console.error("Error al registrar usuario:", error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-200" id="public">
      <div className="w-1/3 mx-auto">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
        <h1 class="text-4xl font-bold mb-2 text-indigo-500 text-center py-12">
          Registro
        </h1>
        <img
          class="w-20 mx-auto mb-5"
          src="https://img.icons8.com/fluent/344/year-of-tiger.png"
        />
        <form onSubmit={handleRegister}>
          <div>
            <label class="block mb-2 text-indigo-500" for="username">
              Email
            </label>
            <input
              class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label class="block mb-2 text-indigo-500" for="password">
              Password
            </label>
            <input
              class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            >
              {" "}
              Registrar{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

/*
const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      console.log("Se registro usuario...xxx");
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }
*/
