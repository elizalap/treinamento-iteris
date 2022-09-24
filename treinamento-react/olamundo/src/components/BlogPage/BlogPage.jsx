import React from "react";
import BlogPostModel from "../../models/BlogPostModel";
import BlogPost from "../BlogPost";

function BlogPage() {
   let listaDePostagens = [];
   listaDePostagens.push(
      new BlogPostModel(
         "Primeira postagem!",
         "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
      ),
      new BlogPostModel(
         "Segunda postagem!",
         "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/13-copy-o61.jpg?quality=70&strip=info&w=1024",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
      ),
      new BlogPostModel(
         "Terceira postagem!",
         "https://blog.hotmart.com/blog/2017/09/criar-um-blog.png",
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui"
      )
   );
   return (
      <div className="listaPostagens">
         {listaDePostagens.map((item, i) => (
            <BlogPost key={i} post={item} />
         ))}
      </div>
   );
}
export default BlogPage;