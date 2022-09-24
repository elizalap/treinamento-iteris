import DadosPessoais from "../DadosPessoais/DadosPessoais";
import Formacao from "../Formacao";
import "./CurriculoVitae.css";

function CurriculoVitae() {
   return (
      <div className="container">
         <DadosPessoais></DadosPessoais>
         <Formacao></Formacao>

         <div className="Experiência">
            <h3>Creartcode - Estagiária</h3>
            <p>Criação e manutenção de sites Wordpress</p>
         </div>
      </div>
   )
}

export default CurriculoVitae;