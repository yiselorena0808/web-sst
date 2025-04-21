import React from "react";
import "./Blog.css"


const Blog: React.FC = () => {
  return (
    <section className="blog">
      <input className="titulo" placeholder="TITULO" disabled/>
        <div className="image">
          <span>IMAGEN DE LA PUBLICACION</span>
        </div>

      <input className="descripcion" placeholder="DESCRIPCIÓN" disabled/>

        <div className="post-icons">
          <span>❤️</span>
          <span>💬</span>
          <span>🔖</span>
        </div>



       <button className="comentarios">SECCION DE COMENTARIOS</button>
    </section>
  );
};

export default Blog;