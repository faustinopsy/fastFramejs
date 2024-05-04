import * as elementTypes from "../../componentes/TiposElementos.js";
import * as fabricar from "../../componentes/Fabrica.js";
const estiloPadrao = {
    border: '2px dashed orange',
    'box-sizing': 'border-box', 
};
const card = {
    tipo: elementTypes.DIV,
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
    tipo: elementTypes.BUTTON,
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
      click: function(e){
        e.preventDefault()
        const nome = document.querySelector('#inputnome').value
        const email = document.querySelector('#inputemail').value
        console.log(`Nome: ${nome} - E-mail: ${email}` )
        alert('dados no console')
      }
    }
  }; 
  const labelnome = {
    tipo: elementTypes.LABEL,
    id: 'label1',
    for: 'inputnome',
    textContent: 'Nome:',
    style:{
      width : '90%',
      color: 'white',
    },
  };
  const inputnome = {
    tipo: elementTypes.INPUT,
    id: 'inputnome',
    name: 'inputnome',
    textContent: 'Seu nome',
    className: 'input-primary',
    placeholder: 'Escreva seu nome',
    autocompconste: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    style:{
      width : '90%'
    },
  };
  const labelemail = {
    tipo: elementTypes.LABEL,
    id: 'label1',
    for: 'inputemail',
    textContent: 'E-Mail:',
    style:{
      width : '90%',
      color: 'white',
    },
  };
  const inputemail = {
    tipo: elementTypes.INPUT,
    id: 'inputemail',
    name: 'inputemail',
    textContent: 'Seu nome',
    className: 'input-primary',
    placeholder: 'Escreva seu EMail',
    autocompconste: 'off',
    autocapitalize: 'off',
    autocorrect: 'off',
    style:{
      width : '90%'
    },
  };
const form ={
    tipo: elementTypes.FORM,
    id: 'form',
      style: {
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        width: 'auto',
        height: 'auto',
        border: 'solid 2px red',
      }
  }
export default function fabricaForm(){
    const novoform = fabricar.criarContainer(form);
    const novocard = fabricar.criarContainer(card);
    const novolabelnome = fabricar.criarContainer(labelnome);
    const novoinputnome = fabricar.criarContainer(inputnome);
    const novolabelemail = fabricar.criarContainer(labelemail);
    const novoinputemail = fabricar.criarContainer(inputemail);
    const novobotaoEnvia = fabricar.criarContainer(botaoEnvia);
   
    novoform.appendChild(novolabelnome)
    novoform.appendChild(novoinputnome)
    novoform.appendChild(novolabelemail)
    novoform.appendChild(novoinputemail)
    novoform.appendChild(novobotaoEnvia)
    novocard.appendChild(novoform)
    
    return novocard
    
  }




