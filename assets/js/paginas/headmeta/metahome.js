import * as elementTypes from "../../componentes/TiposElementos.js";
import * as fabricar from "../../core/Fabrica.js";
const estiloPadrao = {
    border: '2px solid black',
    'box-sizing': 'border-box', 
};

const titulo = {
    tipo: elementTypes.TITULO,
    textContent:'Página Home',
};
const metadescricao = {
    tipo: elementTypes.META,
    name:'description',
    content:'Descrição da página Home',
};
const metaautor = {
    tipo: elementTypes.META,
    name:'author',
    content:'Rodrigo Faustino',
};
const metakeywords = {
    tipo: elementTypes.META,
    name:'keywords',
    content:'palavra, palavra, Home',
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


export function metaHome() {
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