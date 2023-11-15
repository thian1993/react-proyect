import React, { useState } from "react";
import { useAuth } from "../ruteo/AuthContext"; // (7). Importando contexto
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginForm() {
  const { signIn } = useAuth(); // (7). Usando el contexto

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Por favor, completa ambos campos.");
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate("/sistema-crud"); // Redirigir a ruta /sistema-crud
    } catch (error) {
      toast.error("Error al iniciar sesión: " + error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-200" id="public">
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
      <div className="w-1/3 mx-auto">
        <div>
          <h1 class="text-4xl font-bold mb-2 text-indigo-500 text-center py-12">
            Iniciar Sesión
          </h1>
          <img
            class="w-20 mx-auto mb-5"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
          />
        </div>
        <form onSubmit={handleSignIn}>
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
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <button
              type="submit"
              class="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
            >
              {" "}
              Iniciar Sesión{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

/*
const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }
*/
