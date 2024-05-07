import * as elementTypes from "../componentes/TiposElementos.js";
import * as metaHome from "./headmeta/metahome.js";
import * as fabricar from "../componentes/Fabrica.js";
const estiloPadrao = {
    border: '2px solid black',
    'box-sizing': 'border-box', 
};

const main = {
    tipo: elementTypes.MAIN,
    style: {
        ...estiloPadrao,
        display: 'flex', 
        background: 'black',
        height: 'auto',
    }
};

const article = {
    tipo: elementTypes.ARTICLE,
    style: {
        ...estiloPadrao,
        background: 'lightgreen',
        display: 'flex', 
        'flex-wrap': 'wrap',
        width: '70%',
        height: '100%', 
    }
};

const section1 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'lightcoral',
        width: '50%',
        height: '300px',
    }
};

const section2 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'lightsalmon',
        width: '50%',
        height: '300px',
    }
};

const aside = {
    tipo: elementTypes.ASIDE,
    style: {
        ...estiloPadrao,
        background: 'lightpink',
        width: '30%',
        height: '300px',
        border: 'dashed 2px'
    }
};


export function fabricaHome(){
    const novomain = fabricar.criarContainer(main);
    const novoarticle = fabricar.criarContainer(article);
    const novosection1 = fabricar.criarContainer(section1);
    const novosection2 = fabricar.criarContainer(section2);
    const novoaside = fabricar.criarContainer(aside);
   
    novoarticle.appendChild(novosection1)
    novoarticle.appendChild(novosection2)
    novomain.appendChild(novoarticle)
    novomain.appendChild(novoaside)

    return novomain
    
  }
