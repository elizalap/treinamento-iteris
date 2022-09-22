import React from "react";
import "./BlogPost.css";

function BlogPost(props) {
   const post = props.post;
   return (
      <article className="blogPost">
         <h2>{post.titulo}</h2>
         <img src={post.imagem} alt={post.titulo} />
         <p>{post.texto}</p>
      </article>
   )
}

export default BlogPost;