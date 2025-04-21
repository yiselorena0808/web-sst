import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <button className="sidebar-button">Home</button>
        <button className="sidebar-button">Lista de Chequeo</button>
        <button className="sidebar-button">Reportes</button>
        <button className="sidebar-button">Gestión EPP</button>
        <button className="sidebar-button">Actividades Lúdicas</button>
        <button className="sidebar-button">Blog</button>
      </div>
      <div className="sidebar-bottom">
        <button className="sidebar-button">Más Servicios</button>
        <button className="sidebar-button">Salir</button>
      </div>
    </aside>
  );
};

export default Sidebar;
