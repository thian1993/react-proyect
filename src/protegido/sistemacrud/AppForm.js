import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../conexion/firebase";
import { ToastContainer, toast } from "react-toastify";

const AppForm = (props) => {
  ////////////////// MANEJAR INGRESO DE DATOS ///////////
  const handleStatusChange = (e) => {
    const { name, value } = e.target; // Lectura a <input>
    setObjeto({ ...objeto, [name]: value }); // Pasando name y value
    //console.log({name, value});
    //console.log(objeto);
  };

  ////////////////// GUARDAR-ACTUALIZAR /////////////////
  const camposRegistro = { nombre: "", edad: "", genero: "" };
  const [objeto, setObjeto] = useState(camposRegistro);
  const handleSubmit = async (e) => {
    // Manejador de submit
    e.preventDefault(); // Evitar accion por defecto
    try {
      if (props.idActual === "") {
        if (validarForm()) {
          // Validación de form
          addDoc(collection(db, "persona"), objeto); // Guardar en BD
          toast.success("Se registro con exito."); // Mensaje
        } else {
          console.log("NO se guardo...");
        }
        setObjeto(camposRegistro); // Borrar objeto
      } else {
        await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
        props.setIdActual(""); // Borrar id
        toast.success("Se actualizo con exito."); // Mensaje
      }
    } catch (error) {
      console.log("Error en Crear o actualizar", error);
    }
  };

  const validarForm = () => {
    if (objeto.nombre === "" || /^\s+$/.test(objeto.nombre)) {
      toast.warning("Escriba nombre...");
      return false;
    }
    return true;
  };

  ////////////// Obtener registro por id //////////////
  useEffect(() => {
    if (props.idActual === "") {
      setObjeto({ ...camposRegistro });
    } else {
      obtenerDatosPorId(props.idActual);
    }
  }, [props.idActual]);

  const obtenerDatosPorId = async (xId) => {
    const objPorId = doc(db, "persona", xId); // Objeto por id
    const docPorId = await getDoc(objPorId); // Documento por id
    if (docPorId.exists()) {
      setObjeto(docPorId.data()); // Pasar
    } else {
      console.log("No hay doc");
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-10 text-center">
      <form onSubmit={handleSubmit}>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Cerrar aplicación
        </button>
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
        <h2 className="text-gray-200">Registrar (AppForm.js)</h2>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu Nombre
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleStatusChange}
            value={objeto.nombre}
            name="nombre"
            type="text"
            placeholder="Nombres..."
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu Edad
          </label>
          <input
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleStatusChange}
            value={objeto.edad}
            name="edad"
            type="text"
            placeholder="Edad..."
          />
        </div>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu Genero
          </label>
          <select
            onChange={handleStatusChange}
            value={objeto.genero}
            name="genero"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Seleccione género...</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l mt-4 hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {props.idActual === "" ? "Guardar" : "Actualizar"}
        </button>
      </form>
    </div>
  );
};

export default AppForm;

/*

import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../conexion/firebase";

const AppForm = (props) => {
 
  ////////////////// MANEJAR INGRESO DE DATOS ///////////
  const handleStatusChange = (e) => {
    const {name, value} = e.target;       // Lectura a <input>
    setObjeto({...objeto, [name]:value}); // Pasando name y value
    //console.log({name, value});
    //console.log(objeto);
  }

  ////////////////// GUARDAR-ACTUALIZAR /////////////////
  const camposRegistro = { nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);

  const validarForm = () => {
    if(objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
      alert("Escriba nombre...");
      return false;
    }
    return true;
  };

  ////////////// Obtener registro por id //////////////
  

  //style={{ background:"orange", padding:"10px" }}
  return (
    <div style={{ background:"orange", padding:"10px" }}>
      <form >
        <button>Cerrar aplicación</button>

        <h2>Registrar (AppForm.js)</h2>

        <input 
          name='nombre' type='text' placeholder='Nombres...' /> <br/>
        
        <input
          name='edad' type='text' placeholder='Edad...' /> <br/>
        
        <select >
          <option value="">Seleccione género...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select> <br/>
        
        <button>
          {props.idActual=="" ? "Guardar": "Actualizar" }
        </button>
      </form>
    </div>
  )
}

export default AppForm;
*/
