import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="header-title">Nombre Administrador</h1>
      <img src="/ruta-del-logo.png" alt="Logo" className="header-logo" />
    </header>
  );
};

export default Header;
