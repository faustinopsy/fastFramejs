import * as tipo from "./componentes/TiposElementos.js";
import * as fabricar from "./componentes/Fabrica.js";
const container = {
    tipo: tipo.DIV,
    id: 'div0',
    className: 'div-primary',
    style: {
      display: 'flex',
      'flex-wrap': 'wrap',
      'justify-content': 'center',
      width: '380px',
      height: 'auto',
      'background-color': '#ffffff',
      'background-image': 'url("https://i.pinimg.com/564x/43/26/a8/4326a8653cae1ba0ce276fd293dd2661.jpg")',
      'background-repeat': 'no-repeat',
      'background-position': 'right top',
      border: 'solid 2px red',
      "box-shadow": '5px 30px 30px #888888',
    }
  };
  const card = {
    tipo: tipo.DIV,
    id: 'div1',
    style: {
      display: 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      width: '300px',
      height: '300px',
      'background-color': '#2196f345',
      'backdrop-filter' : 'blur(5px)',
      border: 'solid 2px red',
      "box-shadow": '5px 30px 30px #888888',
    }
  };
  const botao = {
    tipo: tipo.BUTTON,
    id: 'btn1',
    textContent: 'clique aqui',
    className: 'btn-primary',
    placeholder: 'clique aqui',
    style:{
      width : '80px',
      'transition-duration': '0.4s',
      'cursor': 'pointer', 
      'background-color': '#04AA6D',
      color: 'white',
    },
    hover:{
      colorin: "blue",
      colorout: '#04AA6D',
    },
    eventos: {
      click: function(){
        const nome = document.querySelector('#input-1').value
        console.log(nome)
      }
    }
  };
  
  const label = {
    tipo: tipo.LABEL,
    id: 'label1',
    for: 'input-1',
    textContent: 'Escreva aqui: ',
    style:{
      width : '220px'
    },
    eventos: {
      keyup: function(e){
        console.log(e.target.value)
      }
    }
  };
  const input = {
    tipo: tipo.INPUT,
    id: 'input1',
    name: 'input1',
    textContent: 'Escreva aqui',
    className: 'input-primary',
    placeholder: 'Escreva aqui',
    autocompconste: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    style:{
      width : '220px'
    },
    eventos: {
      keyup: function(e){
        console.log(e.target.value)
      }
    }
  };
  
  const widget = {
    tipo: tipo.BUTTON,
    id: 'btn007',
    textContent: '',
    placeholder: '',
    title : 'chat',
    'aria-label': 'chat',
    style:{
      position:   'fixed',
      top:   '30px',
      right: '30px',
      width: '230px',
      height: '130px',
      background: 'rgba(0, 0, 0, 0.5)',
      'z-index': '99999',
      'background-image': 'url()',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      color: 'white',
      border: 'white',
      'border-radius': '0px 20px 0 20px',
      'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.5)',
      cursor: 'pointer',
    },
    eventos: {
      click: function(){
        alert('clicado')
      }
    }
  };
  const form ={
    tipo: tipo.FORM,
    id: 'form',
      style: {
        display: 'block',
        width: 'auto',
        height: 'auto',
        border: 'solid 2px red',
      }
  }
  
  const table = {
    tipo: tipo.TABLE,
    id: 'div1',
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
        nacionalidade: 'Americano',
      },
      {
        nome: 'joão',
        idade: '12',
        nacionalidade: 'italiano',
      },
    ],
      style: {
        display: 'block',
        width: 'auto',
        height: 'auto',
        border: 'solid 2px red',
      }
  };

  export function fabricaDemo(){
    const meusDadosDaTabela = {
      th: table.th,
      td: table.td,
      id: table.id || "minha-tabela", 
      className: table.className || "", 
      style: table.style || {} 
    };
    
    const elementoTabela = fabricar.criaTabela(meusDadosDaTabela);
    const novocontainer = fabricar.criarContainer(container);
    const novocard = fabricar.criarCard(card);
    const novobotao = fabricar.criarBotao(botao);
    const novoform = fabricar.criarForm(form);
    const novoinput = fabricar.criarInput(input);
    const novolabel = fabricar.criarLabel(label);
    
    
    novocard.appendChild(elementoTabela)
    novoform.appendChild(novolabel)
    novoform.appendChild(novoinput)
    novoform.appendChild(novobotao)
    novocontainer.appendChild(novoform)
   
    novocontainer.appendChild(novocard)
    
    return novocontainer
    //document.body.appendChild(novowidget)
  }


  export function fabricarWidget(){
    return fabricar.criarBotao(widget);
  }
  