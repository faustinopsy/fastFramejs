import * as elementTypes from "../componentes/TiposElementos.js";
import fabricaForm from "./formulario/formulario.js";
import * as metaContato from "./headmeta/metacontato.js";
import * as fabricar from "../componentes/Fabrica.js";


export async function fabricaContato(fetchDados){
    const { main, article, section1, section2, aside, imagem } = fetchDados;
  
    const formulario = fabricaForm();
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
