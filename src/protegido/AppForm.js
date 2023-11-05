import React from "react";

const AppForm = (props) => {
  return (
    <div>
      <form>
        <button>Cerrar aplicacion</button>
        <h2>Registrar AppForm.js</h2>
        <input name="nombre" type="text" placeholder="Nombre" />
        <input name="edad" type="text" placeholder="Edad" />
        <select>
          <option value="">Seleccionar sexo</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otro">Otro</option>
        </select>
        <button>Guardar / Actualizar</button>
      </form>
    </div>
  );
};

export default AppForm;
