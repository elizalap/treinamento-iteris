import "./Tarefa.css";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";

function Tarefa(props) {
   const { atualizarStatus } = useListaTarefas();

   let classNameTarefa = "tarefa";

   if (props.tarefa.concluida)
      classNameTarefa += " concluida";

   function checkBoxOnChange() {
      atualizarStatus(props.tarefa);
   }

   return (
      <div className="tarefa-wrapper">
         <div className={classNameTarefa}>{props.tarefa.descricao}</div>
         <input
            className="checkbox"
            type="checkbox"
            defaultChecked={props.tarefa.concluida}
            onChange={checkBoxOnChange}
         />

      </div>
   );
}

export default Tarefa;