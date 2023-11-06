import React from "react";

const AppForm = (props) => {
  return (
    <div className="bg-gray-300 p-10 text-center w-1/4 mx-auto">
      <h1 className="text-2xl font-bold text-center py-4">AppForm</h1>
      <form>
        <div class="mb-6">
          <button
            type="button"
            class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Cerrar Sesión
          </button>
        </div>
        <h2 className="text-2xl font-bold text-black py-4">
          Registrar Clientes
        </h2>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Tu email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Tu Contraseña
          </label>
          <input
            name="password"
            type="password"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Selecciona tu genero
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Genero</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div class="mb-6">
          <button
            type="button"
            class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Guardar / Actualizar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppForm;
