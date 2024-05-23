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
        'flex-direction': 'column',
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
        width: '100%',
        height: '100%', 
    }
};

const section1 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'lightcoral',
        width: '40%',
        height: '300px',
    }
};

const section2 = {
    tipo: elementTypes.SECTION,
    style: {
        ...estiloPadrao,
        background: 'lightsalmon',
        width: '40%',
        height: '300px',
    }
};

const aside = {
    tipo: elementTypes.ASIDE,
    style: {
        ...estiloPadrao,
        background: 'lightpink',
        width: '20%',
        height: '300px',
        border: 'dashed 2px'
    }
};
const imagem = {
    tipo: elementTypes.IMG,
    style: {
        ...estiloPadrao,
        width: '100%',
        height: '200px',
        background: `url(./img/rick.jpg) `
    }
};


export function fabricaHome(){
    const novomain = fabricar.criarContainer(main);
    const article0 = fabricar.criarContainer(article);
    const imagemSrc = fabricar.criarContainer(imagem);
    const novoarticle = fabricar.criarContainer(article);
    const novosection1 = fabricar.criarContainer(section1);
    const novosection2 = fabricar.criarContainer(section2);
    const novoaside = fabricar.criarContainer(aside);
    article0.style.height = '200px'
    article0.appendChild(imagemSrc)
    
    novoarticle.appendChild(novosection1)
    novoarticle.appendChild(novosection2)
    novoarticle.appendChild(novoaside)
    novomain.appendChild(article0)
    novomain.appendChild(novoarticle)
   

    return novomain
    
  }
