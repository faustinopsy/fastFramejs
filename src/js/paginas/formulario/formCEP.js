import * as fabricar from "../../core/Fabrica.js";
const estiloPadrao = {
    border: '2px dashed orange',
    'box-sizing': 'border-box', 
};
const card = {
    tipo: 'div',
    id: 'div1',
    style: {
      display: 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      width: 'auto',
      height: 'auto',
      'background-color': '#2196f345',
      'backdrop-filter' : 'blur(5px)',
      border: 'solid 2px red',
      "box-shadow": '5px 30px 30px #888888',
    }
  };
const botaoEnvia = {
    tipo: 'button',
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
      click: "fnCEP"
    }
  }; 
  const labelcep = {
    tipo: 'label',
    id: 'label1',
    for: 'inputcep',
    textContent: 'Nome:',
    style:{
      width : '90%',
      color: 'white',
    },
  };
  const inputcep = {
    tipo: 'input',
    id: 'inputcep',
    name: 'inputcep',
    pattern: '\d{8,8}',
    max:'8',
    maxLength:'8',
    required: 'true',
    textContent: 'CEP',
    className: 'input-primary',
    placeholder: 'Escreva um CEP',
    autocompconste: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    autofocus: 'true',
    style:{
      width : '90%'
    },
  };

const form ={
    tipo: 'form',
    id: 'formcep',
      style: {
        display: 'flex',
      'flex-direction': 'column',
      'justify-content': 'center',
        width: 'auto',
        height: 'auto',
        border: 'solid 2px red',
      }
  }

export default function fabricaCEP(){
    const novoform = fabricar.criarContainer(form);
    const novocard = fabricar.criarContainer(card);
    const novolabelcep = fabricar.criarContainer(labelcep);
    const novoinputcep = fabricar.criarContainer(inputcep);
    const novobotaoEnvia = fabricar.criarContainer(botaoEnvia);
   
    novoform.appendChild(novolabelcep)
    novoform.appendChild(novoinputcep)
    novoform.appendChild(novobotaoEnvia)
    novocard.appendChild(novoform)
    
    return novocard
    
  }




