import React, { useEffect, useState } from "react";
import AppForm from "./AppForm";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../conexion/firebase";
import { ToastContainer, toast } from "react-toastify";

const AppLista = (props) => {
  ////// Lectura fnRead ///////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColeccionConQuery = query(collection(db, "persona")); // Dato de BD
    const unsubcribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xDoc = []; // Variable para organizar datos
      xDatosBD.forEach((doc) => {
        // Recorriendo datos fon bucle
        xDoc.push({ id: doc.id, ...doc.data() }); // Juntando id y coleccion
      });
      setDocBD(xDoc); // Pasando datos a "docBD"
    });
  };
  //fnRead();                                     // Prueba sin useEffect
  useEffect(() => {
    fnRead();
  }, [props.idActual]);
  //console.log(docBD);

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState(""); // Variable para id de c/coleccion
  const fnDelete = async (xId) => {
    //
    if (window.confirm("Confirme para eliminar")) {
      // Ventana para confirmar
      await deleteDoc(doc(db, "persona", xId)); // Elimina en BD
    }
    toast.error("Se elimino con exito."); // Mensaje
  };

  return (
    <div className="mx-auto w-1/3">
      <h1 className="text-gray-900 text-bold text-3xl text-center py-2">
        AppList.js
      </h1>
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
      <AppForm {...{ idActual, setIdActual }} /> {/* Envios de variables */}
      <h3 className="text-center font-bold text-2xl">Lista de clientes</h3>
      {docBD.map(
        (
          row,
          index // Extraer registro e index
        ) => (
          <p className="py-2 text-center font-semibold" key={row.id}>
            {" "}
            {/* Asignar key a <p> */}
            No. {index + 1}. {row.nombre} {row.edad}
            <span
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-1 py-1 mx-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => fnDelete(row.id)}
            >
              Eliminar
            </span>
            <span
              className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-1 py-1 mx-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
              onClick={() => setIdActual(row.id)}
            >
              Actualizar
            </span>
          </p>
        )
      )}
    </div>
  );
};

export default AppLista;
