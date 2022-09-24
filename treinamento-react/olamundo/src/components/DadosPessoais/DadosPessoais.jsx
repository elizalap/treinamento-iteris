import DadosPessoaisModel from "../../models/DadosPessoaisModel";
import "./DadosPessoais.css";

function DadosPessoais() {

   let header = new DadosPessoaisModel(
      "Eliza Lima Alencar",
      "Desenvolvedora Web.",
   )

   return (
      <div>
         <h1>{header.nome}</h1>
         <p>{header.descriçao}</p>
         <hr />
      </div>
   )
}

export default DadosPessoais;