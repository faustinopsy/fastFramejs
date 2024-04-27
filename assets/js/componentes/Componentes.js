const container = {
    tipo: 'div',
    id: 'div-0',
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
    tipo: 'div',
    id: 'div-1',
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
    tipo: 'button',
    id: 'btn-1',
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
    holver:{
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
    tipo: 'label',
    id: 'label-1',
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
    tipo: 'input',
    id: 'input-1',
    name: 'input-1',
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
    tipo: 'button',
    id: 'btn-007',
    textContent: '',
    placeholder: '',
    title : 'chat',
    'aria-label': 'chat',
    style:{
      position:   'fixed',
      bottom:   '30px',
      left: '30px',
      width: '60px',
      height: '60px',
      background: 'rgba(0, 0, 0, 0.5)',
      'z-index': '99999',
      'background-image': 'url(https://nft.faustinopsy.com/img/chat.webp)',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      color: 'white',
      border: 'white',
      'border-radius': '50px',
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
    tipo: 'form',
    id: 'form',
      style: {
        display: 'block',
        width: 'auto',
        height: 'auto',
        border: 'solid 2px red',
      }
  }
  
  const table = {
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

  export {container, card,form, input,label, botao, widget, table};