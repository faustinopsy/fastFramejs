function criaElemento(elemento){
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

let botao = {
  tipo: 'button',
  id: 'btn-1',
  textContent: 'clique aqui',
  className: 'btn-primary',
  placeholder: 'clique aqui',
  eventos: {
    click: function(){
      console.log('clicado')
    }
  }

};

let input = {
  tipo: 'input',
  id: 'input-1',
  textContent: 'Escreva aqui',
  className: 'input-primary',
  placeholder: 'Escreva aqui',
  eventos: {
    blur: function(e){
      console.log(e)
    }
  }

};

let card = {
  tipo: 'div',
  id: 'div-1',
  className: 'div-primary',
  placeholder: '',
  style: {
    display: 'inline-block',
    width: '300px',
    height: '300px',
    border: 'solid 2px red',
  }
  

};

card = criaElemento(card);
botao = criaElemento(botao);
input = criaElemento(input);
card.appendChild(botao)
card.appendChild(input)
document.body.appendChild(card)