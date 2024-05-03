
import fabricaMenu from "./paginas/nav/menu.js";
import fabricaRodape from "./paginas/footer/rodape.js";
import {fabricaHome,metaTagsHome } from "./paginas/home.js";
import {fabricaSobre,metaTagsSobre } from "./paginas/sobre.js";
import {fabricaContato,metaTagsContato } from "./paginas/contato.js";
import adicionarMetaTagsSEO from "./componentes/MetaTags.js";
import WeatherWidget from "./WeatherWidget.js";
import {fabricaDemo, fabricarWidget} from "./Demo.js";

window.addEventListener('DOMContentLoaded', function(){



const navbar = fabricaMenu();
const footer = fabricaRodape();

document.body.appendChild(navbar)
document.body.appendChild(fabricaHome())
document.body.appendChild(footer)

window.addEventListener('hashchange', function(){
  switch(this.location.hash){
    case '#home':
        removeMain()
        metaTagsHome();
        document.body.insertBefore(fabricaHome(),footer)
          
    break;
    case '#sobre':
          removeMain()
          metaTagsSobre();
          document.body.insertBefore(fabricaSobre(),footer)
    break;
    case '#contato':
          removeMain();
          metaTagsContato();
          document.body.insertBefore(fabricaContato(),footer)
    break;
    default: 
          removeMain();
          metaTagsHome();
          document.body.insertBefore(fabricaHome(),footer)
  }
  
})
function removeMain(){
  let main = document.querySelector("main");
  document.querySelector("head").innerHTML='';
      if (main.parentNode) {
          main.parentNode.removeChild(main);
      }
      
}


fabricarWidget()
const weatherWidget = new WeatherWidget();
weatherWidget.getLocationAndWeather();

});

