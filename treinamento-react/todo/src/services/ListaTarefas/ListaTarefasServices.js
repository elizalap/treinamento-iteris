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

function editar(listaDeTarefas, tarefa) {
   //atualiza o campo concluida e cria um objeto novo
   const tarefaAtualizada = { ...tarefa, concluida: !tarefa.concluida };

   //criar uma lista nova e atualizar a tarefa antiga
   const ListaAtualizada = listaDeTarefas.map((x) => {
      if (x.id !== tarefa.id) {
         return x;
      } else {
         return tarefaAtualizada;
      }
   });

   return ListaAtualizada;
}