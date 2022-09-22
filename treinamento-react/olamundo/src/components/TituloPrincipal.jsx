import React, { useEffect, useState } from "react";

function TituloPrincipal(props) {
   let [titulo, setTitulo] = useState(props.titulo ?? "Ola mundo");

   useEffect(() => {
      console.log("Titulo mudou")
   }, [titulo])

   function clickCallBack(event) {
      alert("Obrigado por clicar em mim")
   }


   function handleChangeTitle(event) {

      console.log(event.target.value);
      setTitulo(event.target.value);
   }


   return (
      <>
         <h1 onClick={clickCallBack}>{titulo}</h1>
         <input type="text"
            onChange={handleChangeTitle}>

         </input>
      </>
   )
}

export default TituloPrincipal;