import TituloPrincipal from "./components/TituloPrincipal";
import BlogPost from "./components/BlogPost";
import BlogPostModel from "./models/BlogPostModel";

function App() {
  const blogModel = new BlogPostModel(
    "Primeira Postagem",
    "https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png",
    "Lorem ipsum dolor sit amet, consectur adipiscing elit."
  )

  return (
    <div>
      <BlogPost post={blogModel}></BlogPost>
    </div>
  )
}

export default App;
