import TarefaModel from "../../models/TarefaModel";

//função de construção do objeto que vamos compartilhar
//Usada na inicialização
export function ListaTarefasContextBuilder([
   listaDeTarefas,
   setListaDeTarefas,
]) {
   return {
      listaDeTarefas,
      adicionarTarefa: (tarefa) =>
         setListaDeTarefas(adicionar(listaDeTarefas, tarefa))
   };
}

//funções privadas para tratamento de dados
function adicionar(listaDeTarefas, descricaoTarefa) {
   const novaTarefa = new TarefaModel(
      listaDeTarefas.length + 1,
      descricaoTarefa
   );
   //spread operator: "...listaDeTarefas"
   return [...listaDeTarefas, novaTarefa]
}