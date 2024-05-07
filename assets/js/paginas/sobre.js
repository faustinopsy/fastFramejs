import * as elementTypes from "../componentes/TiposElementos.js";
import fabricaCEP from "./formulario/formCEP.js";
import * as metaSobre from "./headmeta/metasobre.js";
import * as fabricar from "../componentes/Fabrica.js";
const estiloPadrao = {
    border: '2px dashed orange',
    'box-sizing': 'border-box', 
};

const main = {
    tipo: elementTypes.MAIN,
    style: {
        ...estiloPadrao,
        display: 'flex', 
        background: 'lightyellow',
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
        background: 'teal',
        width: '50%',
        height: '300px',
    }
};

const section2 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'blue',
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

export  function fabricaSobre(){
    const formulario = fabricaCEP();
    const novomain = fabricar.criarContainer(main);
    const novoarticle = fabricar.criarContainer(article);
    const novosection1 = fabricar.criarContainer(section1);
    const novosection2 = fabricar.criarContainer(section2);
    const novoaside = fabricar.criarContainer(aside);
   
    novoarticle.appendChild(novosection1)
    novosection2.appendChild(formulario)
    novoarticle.appendChild(novosection2)
    novomain.appendChild(novoarticle)
    novomain.appendChild(novoaside)

    return novomain
    
  }
  export  function metaTagsSobre() {
    metaSobre()
}



