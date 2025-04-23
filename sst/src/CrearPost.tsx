import React from "react";
import "./CrearPost.css";

const CrearPost: React.FC = () => {
  return (
    <section className="create-post-form">
      <h2 className="create-title">¡Crea una publicación!</h2>

      <button className="create-button">AÑADE EL TÍTULO</button>

      <div className="upload-image">
        <span>SUBE UNA IMAGEN</span>
      </div>

      <button className="create-button">AÑADE UNA DESCRIPCIÓN</button>

      <button className="create-button">SUBE UN ARCHIVO</button>

      <button className="publish-button">PUBLICAR</button>
    </section>
  );
};

export default CrearPost;
