// src/components/dashboard/AgriculturalManagement/machinery/ViewMachineryModal.jsx

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../../../css/ViewModal.css"; // Asegúrate de importar tu css

const ViewMachineryModal = ({ show, closeModal, machinery }) => {
  const [currentMachinery, setCurrentMachinery] = useState(null);

  useEffect(() => {
    if (show && machinery) {
      console.log("Datos de la maquinaria recibidos:", machinery);
      setCurrentMachinery(machinery);
    }
  }, [show, machinery]);

  if (!show || !currentMachinery) return null;

  const { name, description, costPerHour } = currentMachinery;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>×</button>
        <h2 className="title">Detalles de la Maquinaria</h2>
        <div className="details">
          <p><strong>Nombre:</strong> {name || "Información no disponible"}</p>
          <p className="description"><strong>Descripción:</strong> {description || "Información no disponible"}</p>
          <p><strong>Costo por Hora:</strong> {costPerHour || "Información no disponible"}</p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ViewMachineryModal;
