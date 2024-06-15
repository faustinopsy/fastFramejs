import fabricaCEP from "./formulario/formCEP.js";
import * as metaSobre from "./headmeta/metasobre.js";
import * as fabricar from "../core/Fabrica.js";

export async function fabricaSobre(fetchDados){
    const { main, article, section1, section2, aside, imagem } = fetchDados;
    const formulario = fabricaCEP();
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
    novosection2.appendChild(formulario)
    novoarticle.appendChild(novosection2)
    novoarticle.appendChild(novoaside)
    novomain.appendChild(article0)
    novomain.appendChild(novoarticle)

    return novomain
    
  }
  export  function metaTagsSobre() {
    metaSobre()
}



