import fabricaForm from "./formulario/formulario.js";
import * as fabricar from "../core/Fabrica.js";

const estiloPadrao = {
  border: '2px solid black',
  'box-sizing': 'border-box', 
};

const titulo = {
  tipo: 'titulo',
  textContent:'Página Home',
};
const metadescricao = {
  tipo: 'meta',
  name:'description',
  content:'Descrição da página Home',
};
const metaautor = {
  tipo: 'meta',
  name:'author',
  content:'Rodrigo Faustino',
};
const metakeywords = {
  tipo: 'meta',
  name:'keywords',
  content:'palavra, palavra, Home',
};
const metarobots = {
  tipo: 'meta',
  name:'robots',
  content:'index, follow',
};

const charset = {
  tipo: 'meta',
  charset:'UTF-8',
};
const viewport = {
  tipo: 'meta',
  name:'viewport',
  content: "width=device-width, initial-scale=1.0", 
};


export function metaContato() {
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
export async function fabricaContato(fetchDados){
    const { main, article, section1, section2, aside, imagem } = fetchDados;
  
    const formulario = fabricaForm(section2.conteudo);
    const novomain = fabricar.criarContainer(main);
    const article0 = fabricar.criarContainer(article);
    const imagemSrc = fabricar.criarContainer(imagem);
    const novoarticle = fabricar.criarContainer(article);
    const novosection1 = fabricar.criarContainer(section1);
    const novosection2 = fabricar.criarContainer(section2);
    const novoaside = fabricar.criarContainer(aside);
    article0.style.height = '200px'
    article0.appendChild(imagemSrc)
   
    novosection2.appendChild(formulario)
    novoarticle.appendChild(novosection1)
    novoarticle.appendChild(novosection2)
    novoarticle.appendChild(novoaside)
    novomain.appendChild(article0)
    novomain.appendChild(novoarticle)

    return novomain
    
  }
  export function metaTagsContato() {
    metaContato()
}
