/*Cenário: Joaozinho queria fazer brigadeiro, mas não tinha leite condensado
e então precisa ir na padaria comprar antes de fazê-lo.*/

function comprarLeiteCondensado() {
   //Joaozinho demora 5 segundos para ir na padaria.
   console.log('Joaozinho está indo na padaria...');

   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const mensagem = "Joaozinho retornou da padaria.";
         resolve(mensagem);
      }, 5000);
   });
}

function fazerBrigadeiro() {
   console.log('Fazendo brigadeiro ...');
}

function comprarLeiteCondensadoEFazerBrigadeiroFetchAPI() {

   comprarLeiteCondensado()
      .then((mensagem) => {
         console.log(mensagem);
         fazerBrigadeiro();
      })
      .catch((mensagem) => console.log(mensagem))
      .finally(() => {
         console.log('Script concluído');
      });
}

async function comprarLeiteCondensadoEFazerBrigadeiroAsyncAwait() {
   try {
      const retorno = await comprarLeiteCondensado();
      console.log(retorno);
      fazerBrigadeiro();
   }
   catch (erro) {
      console.log(erro);
   }
   // "finnaly"
   console.log('Script concluído');

}

//comprarLeiteCondensadoEFazerBrigadeiroFetchAPI();
comprarLeiteCondensadoEFazerBrigadeiroAsyncAwait();