import { Routes, Route, Outlet, Switch, Redirect } from "react-router-dom";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { getAuth, signOut } from "firebase/auth";
//import "./BarraNavegacion.css";
import { useNavigate } from "react-router-dom";

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from "../protegido/SistemaCRUD";
import ListaDeAlumnos from "../protegido/sistemacrud/ListaDeAlumnos";

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from "../protegido/SistemaFILE";
import Fotos from "../protegido/sistemafile/Fotos";

//////////////////////// PAG. PUBLICOS /////////////////
import RegisterForm from "../login/RegisterForm";
import LoginForm from "../login/LoginForm";
import AppLista from "../protegido/sistemacrud/AppLista";

const BarraRutasProtected = () => {
  const { user } = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate("/home"); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    }
  };

  return (
    <div>
      <nav className="bg-white border-gray-300 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              class="w-12"
              src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Sistema Crud
            </span>
          </a>
          <div
            className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
            id="login"
          >
            {user ? ( ////////  Usuario autenticado  ///////////
              <button className="text-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Usuario autenticado: <span> {user.email}</span>{" "}
              </button>
            ) : null}
            {user ? (
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <Link onClick={handleSignOut}> Cerrar sesión </Link>{" "}
              </button>
            ) : (
              <button
                type="button"
                className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <Link to="/iniciarsesion">Iniciar sesión</Link>{" "}
              </button>
            )}
          </div>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="menu"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
              <li>
                <Link
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-gray-300"
                  to="/sistema-crud/applista"
                >
                  Sistema CRUD
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-gray-300"
                  to="/sistema-crud/alumnos"
                >
                  Alumnos
                </Link>{" "}
              </li>
              <li>
                <Link
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-gray-300"
                  to="/sistema-file/fotos"
                >
                  Fotos
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/iniciarsesion" element={<LoginForm />} />
        <Route path="/nuevoregistro" element={<RegisterForm />} />

        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="applista" element={<AppLista />} />
          <Route path="alumnos" element={<ListaDeAlumnos />} />
        </Route>

        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="fotos" element={<Fotos />} />
        </Route>
      </Routes>
    </div>
  );
};

export default BarraRutasProtected;

function MarcoParaSistemaCRUD() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 h-screen">
      <h1 className="text-4xl text-gray-900 text-bold py-14 text-center">
        Sistema CRUD
      </h1>
      <Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}

function MarcoParaSistemaFILE() {
  return (
    <div className="bg-gradient-to-r from-yellow-200 via-green-200 to-green-300 h-screen">
      <h1>Marco Sistema FILES</h1>
      <Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              )}

              <li><Link to="/nuevoregistro">Registrar</Link></li>

              {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                ) : (
                null
              )}
  
  
  /*
  
  
  /*
  const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }
  */
