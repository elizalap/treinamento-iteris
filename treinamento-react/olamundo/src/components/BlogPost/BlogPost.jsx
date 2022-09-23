import React, { useState } from "react";
import "./BlogPost.css";

function BlogPost(props) {

   const [contador, setContador] = useState(0);
   const [post, setPost] = useState(props.post);

   function checkboxChangeBack(event) {
      const novoValorExibirImagem = !post.exibirImagem;
      setPost({ ...post, exibirImagem: novoValorExibirImagem })
   }

   let imgTag = <div></div>;
   if (post.exibirImagem) {
      imgTag = <img src={post.imagem} alt={post.titulo} />
   }

   function click() {
      setContador(contador + 1);
   }

   return (
      <article className="blogPost">
         <h2>{post.titulo}</h2>
         <div>
            <input
               type="checkbox"
               defaultChecked={post.exibirImagem}
               onChange={checkboxChangeBack}
            />
            Exibir Imagem?
         </div>
         {imgTag}
         <p>{post.texto}</p>
         <button onClick={click}>
            Compartilhar!
         </button>
         <div>{contador}</div>
      </article>
   )
}

export default BlogPost;