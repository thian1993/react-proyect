import React from "react";
import AppForm from "./AppForm";

const AppLista = (props) => {
  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-center py-4">AppLista</h1>
      <AppForm />
      <div className="text-center py-4">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">
          Lista de Clientes:
        </h2>
        <ol className="space-y-1 text-gray-500 list-decimal list-inside">
          <li>
            <span className="font-semibold text-gray-900">Juan Mamani</span>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Rosa Maria</span>
          </li>
          <li>
            <span className="font-semibold text-gray-900">Ricardo Llerena</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default AppLista;
