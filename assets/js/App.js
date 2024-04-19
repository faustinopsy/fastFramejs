import criaElemento from "./componentes/CriaElemento.js";

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

let table = {
  tipo: 'table',
  id: 'div-1',
  className: 'div-primary',
  th: {
    col1: 'Nome',
    col2: 'Idade',
    col3: 'Nascionalidade',
  },
  td: [
    {
    nome: 'jose',
    idade: '30',
    nacionalidade: 'Brasileiro',
  },
  {
    nome: 'maria',
    idade: '25',
    nacionalidade: 'Nacionalidade',
  },
  {
    nome: 'Nome',
    idade: 'Idade',
    nacionalidade: 'Nacionalidade',
  },
],
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