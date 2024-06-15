import * as fabricar from "../../core/Fabrica.js";
const estiloPadrao = {
    //border: '2px solid black',
    'box-sizing': 'border-box', 
};

const footer = {
    tipo: 'footer',
    style: {
        ...estiloPadrao,
        background: 'lightgray',
        position: 'fixed',
        bottom: '0',
        width: '80%',
        clear: 'both',
        height: '60px',
    }
};

export default function fabricaRodape(){
    const novofooter = fabricar.criarContainer(footer);
    return novofooter
    
  }
