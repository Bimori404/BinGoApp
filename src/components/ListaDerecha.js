import React from "react";
import { Contenedor } from "./Contenedor.js";
import "../App.css"; //CSS DE LA CLASE

export function Listader() {
  return (
    <div className="contenedores">
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
      <Contenedor ubicacion="Cafetería" porcentaje="35%" tipo="PET"/>
    </div>
  );
}
