import * as elementTypes from "../componentes/TiposElementos.js";
import fabricaForm from "./formulario/formulario.js";
import * as metaContato from "./headmeta/metacontato.js";
import * as fabricar from "../componentes/Fabrica.js";
const estiloPadrao = {
    border: 'thick double #32a1ce',
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


export function fabricaContato(){
    const formulario = fabricaForm();
    const novomain = fabricar.criarContainer(main);
    const novoarticle = fabricar.criarContainer(article);
    const novosection1 = fabricar.criarContainer(section1);
    const novosection2 = fabricar.criarContainer(section2);
    const novoaside = fabricar.criarContainer(aside);
   
    novosection1.appendChild(formulario)
    novoarticle.appendChild(novosection1)
    novoarticle.appendChild(novosection2)
    novomain.appendChild(novoarticle)
    novomain.appendChild(novoaside)

    return novomain
    
  }
  export  function metaTagsContato() {
    metaContato()
}
