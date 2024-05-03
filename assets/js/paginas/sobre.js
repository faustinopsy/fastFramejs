import * as elementTypes from "../componentes/TiposElementos.js";
import * as fabricar from "../componentes/Fabrica.js";
import fabricaCEP from "./formulario/formCEP.js";

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
const titulo = {
    tipo: elementTypes.TITULO,
    textContent:'Página Sobre',
};
const metadescricao = {
    tipo: elementTypes.META,
    name:'description',
    content:'Descrição da página Sobre',
};
const metaautor = {
    tipo: elementTypes.META,
    name:'author',
    content:'Rodrigo Faustino',
};
const metakeywords = {
    tipo: elementTypes.META,
    name:'keywords',
    content:'palavra, palavra, Sobre',
};
const metarobots = {
    tipo: elementTypes.META,
    name:'robots',
    content:'index, follow',
};
const charset = {
    tipo: elementTypes.META,
    charset:'UTF-8',
};
const viewport = {
    tipo: elementTypes.META,
    name:'viewport',
    content: "width=device-width, initial-scale=1.0", 
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
    const head = document.querySelector('head');
    if (!head) {
        console.error('Elemento <head> não encontrado no documento.');
        return;
    }
    const viewportx = fabricar.criarContainer(viewport);
    head.appendChild(viewportx);
    const charsetx = fabricar.criarContainer(charset);
    head.appendChild(charsetx);
    const title = fabricar.criarContainer(titulo);
    head.appendChild(title);
    const descricao = fabricar.criarContainer(metadescricao); 
    head.appendChild(descricao);
    const autor = fabricar.criarContainer(metaautor); 
    head.appendChild(autor);
    const palavrasChaves = fabricar.criarContainer(metakeywords); 
    head.appendChild(palavrasChaves);
    const tagRobos = fabricar.criarContainer(metarobots); 
    head.appendChild(tagRobos);
}


