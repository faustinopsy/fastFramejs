import * as elementTypes from "../componentes/TiposElementos.js";
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
const titulo = {
    tipo: elementTypes.TITULO,
    textContent:'Página Contato',
};
const metadescricao = {
    tipo: elementTypes.META,
    name:'description',
    content:'Descrição da página Contato',
};
const metaautor = {
    tipo: elementTypes.META,
    name:'author',
    content:'Rodrigo Faustino',
};
const metakeywords = {
    tipo: elementTypes.META,
    name:'keywords',
    content:'palavra, palavra, Contato',
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

export function fabricaContato(){
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
  export  function metaTagsContato() {
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
