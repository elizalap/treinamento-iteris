import react from "react";

function TituloPrincipal(props) {
   let titulo = "Olá, mundo!";

   if (props.titulo) {
      titulo = props.titulo;
   }

   return <h1>{titulo}</h1>
}

export default TituloPrincipal;