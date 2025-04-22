import React from 'react';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <h2>Menú</h2>
            </div>
            <div className="sidebar-content">
                <ul>
                    <li><a href="#">Gestion EPP</a></li>
                    <li><a href="#">Actividades Ludicas</a></li>
                    <li><a href="#">Reportes</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Asesoramiento</a></li>
                    <li><a href="#">Mas Servicios</a></li>
                    <li><a href="#">Salir</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;



