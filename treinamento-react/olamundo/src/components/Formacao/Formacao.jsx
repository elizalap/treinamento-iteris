import FormacaoModel from "../../models/FormacaoModel";

function Formacao() {
   const formacao = new FormacaoModel(
      "Unilasalle RJ - Sistemas de Informação",
      "Bacharelado 2019 - 2024",
   )

   return (
      <>
         <h3>{formacao.titulo}</h3>
         <p>{formacao.descricao}</p>
      </>

   )
}

export default Formacao;