export default function criaElemento(elemento){
  if(!elemento.tipo){
    console.log("o tipo é o brigatório")
    return null
  }

  let novoElemento = document.createElement(elemento.tipo);
    for (let propriedade in elemento){
      if(propriedade !== "tipo" && propriedade !=="eventos" && propriedade !=="textContent" && propriedade !== "style"){
        novoElemento.setAttribute(propriedade, elemento[propriedade]);
      }
    }
    novoElemento.textContent = elemento.textContent
    if(elemento.eventos){
      for(let evento in elemento.eventos){
        novoElemento.addEventListener(evento, elemento.eventos[evento])
      }
    }  
    if(elemento.style){
      let css='';
      for(let style in elemento.style){
        css += `${style} : ${elemento.style[style]}; `
      }
      novoElemento.setAttribute("style", css)
    }  
    return novoElemento;
}