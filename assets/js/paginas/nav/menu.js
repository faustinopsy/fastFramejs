import * as elementTypes from "../../componentes/TiposElementos.js";
import * as fabricar from "../../componentes/Fabrica.js";
const estiloPadrao = {
    //border: '2px solid black',
    'box-sizing': 'border-box', 
};

const header = {
    tipo: elementTypes.HEADER,
    style: {
        ...estiloPadrao,
        background: 'lightblue',
        textAlign: 'center',
        height: 'auto', 
    }
};

const nav = {
    tipo: elementTypes.NAV,
    autocapitalize: 'a',
    id: 'nav',
    style: {
        ...estiloPadrao,
        display: 'flex', 
        'flex-wrap': 'wrap',
        alignItems: 'center', 
        height: '50px', 
    }
};

const ul = {
    tipo: elementTypes.UL,
    style: {
        ...estiloPadrao,
        'list-style': 'none',
       
        margin: '0', 
        flex: '1', 
    }
};

const li = {
    tipo: elementTypes.LI,
    style: {
        ...estiloPadrao,
        flex: '1', 
    }
};

const logo = {
    tipo: elementTypes.IMG,
    src: './img/icone.png',
    style: {
        ...estiloPadrao,
        cursor: 'pointer',
        'text-decoration':'none',
        position: 'relative',
        'right': '40px',
        width: '40px',
    },
    textContent: 'Home',
    hover:{
        colorin: "#33DCFF",
        colorout: '',
      },
    eventos: {
        click: function(){
            location.hash = '#home'
        }
    }
};
const a1 = {
    tipo: elementTypes.A,
    accessKey: 'h',
    style: {
        ...estiloPadrao,
        cursor: 'pointer',
        'text-decoration':'none',
        padding: '15px',
    },
    textContent: 'Home',
    hover:{
        colorin: "#33DCFF",
        colorout: '',
      },
    eventos: {
        click: function(){
            location.hash = '#home'
        }
    }
};
const a2 = {
    tipo: elementTypes.A,
    accessKey: 's',
    style: {
        ...estiloPadrao,
        cursor: 'pointer',
        'text-decoration':'none',
        padding: '15px',

    },
    textContent: 'Sobre',
    hover:{
        colorin: "#33DCFF",
        colorout: '',
      },
    eventos: {
        click: function(){
            location.hash = '#sobre'
        }
    }
};
const a3 = {
    tipo: elementTypes.A,
    accessKey: 'c',
    style: {
        ...estiloPadrao,
        cursor: 'pointer',
        'text-decoration':'none',
        padding: '15px',

    },
    textContent: 'Contato',
    hover:{
        colorin: "#33DCFF",
        colorout: '',
      },
    eventos: {
        click: function(){
            location.hash = '#contato'
        }
    }
};

export default function fabricaMenu(){
    const novoheader = fabricar.criarContainer(header);
    const novonav = fabricar.criarContainer(nav);
    const novologo = fabricar.criarContainer(logo);
    const novoul = fabricar.criarContainer(ul);
    const novoli = fabricar.criarContainer(li);
    const link1 = fabricar.criarBotao(a1);
    const link2 = fabricar.criarBotao(a2);
    const link3 = fabricar.criarBotao(a3);
    
    novoli.appendChild(novologo)
    novoli.appendChild(link1)
    novoli.appendChild(link2)
    novoli.appendChild(link3)
    novoul.appendChild(novoli)
    novonav.appendChild(novoul)
    novoheader.appendChild(novonav)
  
    return novoheader
    
  }
