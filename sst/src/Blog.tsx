import React from "react";
import "./Blog.css";

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "TITULO 1",
      description: "DESCRIPCIÓN 1",
      image: "IMAGEN DE LA PUBLICACION 1"
    },
    {
      id: 2,
      title: "TITULO 2",
      description: "DESCRIPCIÓN 2",
      image: "IMAGEN DE LA PUBLICACION 2"
    },
    {
      id: 3,
      title: "TITULO 3",
      description: "DESCRIPCIÓN 3",
      image: "IMAGEN DE LA PUBLICACION 3"
    }
  ];

  return (
    <section className="blog">
      <h1 className="h1">Bienvenidos a mi Blog</h1> {/* Título centrado */}
      {posts.map((post) => (
        <div className="contenido" key={post.id}>
          <input className="titulo" placeholder={post.title} disabled />
          <div className="image">
            <span>{post.image}</span>
          </div>

          <input className="descripcion" placeholder={post.description} disabled />

          <div className="post-icons">
            <span>❤️</span>
            <span>💬</span>
            <span>🔖</span>
          </div>

          <button className="comentarios">SECCION DE COMENTARIOS</button>
        </div>
      ))}
    </section>
  );
};

export default Blog;
