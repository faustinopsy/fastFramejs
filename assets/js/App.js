
import fabricaMenu from "./paginas/nav/menu.js";
import fabricaRodape from "./paginas/footer/rodape.js";
import {fabricaHome } from "./paginas/home.js";
import {fabricaSobre } from "./paginas/sobre.js";
import {fabricaContato } from "./paginas/contato.js";
import WeatherWidget from "./WeatherWidget.js";
import {fabricaDemo, fabricarWidget} from "./Demo.js";
import {metaHome} from "./paginas/headmeta/metahome.js";
import {metaContato} from "./paginas/headmeta/metacontato.js";
import {metaSobre} from "./paginas/headmeta/metasobre.js";

window.addEventListener('DOMContentLoaded', function(){

const navbar = fabricaMenu();
const footer = fabricaRodape();

document.body.appendChild(navbar)
document.body.appendChild(fabricaHome())
document.body.appendChild(footer)
document.body.style= "display: flex; justify-content: center;flex-direction: column; width: 80%; margin: 0 auto;"
let tela = {}
tela.home = fabricaHome()
tela.sobre = fabricaSobre()
tela.contato = fabricaContato()
window.addEventListener('hashchange', function(){
  switch(this.location.hash){
    case '#home':
        perfomance(1)
        removeMain()
        metaHome();
        document.body.insertBefore(tela.home,footer)
        perfomance(2)
    break;
    case '#sobre':
          perfomance(1)
          removeMain()
          metaSobre();
          document.body.insertBefore(tela.sobre,footer)
          perfomance(2)
    break;
    case '#contato':
          perfomance(1)
          removeMain();
          metaContato();
          document.body.insertBefore(tela.contato,footer)
          perfomance(2)
    break;
    default: 
          perfomance(1)
          removeMain();
          metaHome();
          document.body.insertBefore(fabricaHome(),footer)
          perfomance(2)
  }
  
})
function removeMain(){
  let main = document.querySelector("main");
  document.querySelector("head").innerHTML='';
      if (main.parentNode) {
          main.parentNode.removeChild(main);
      }
}
let t0;
function perfomance(tempo){
      if(tempo===1){
            t0 = performance.now();
      }
      if(tempo===2){
            let t1=performance.now()
        console.log("tempo de carregamento " + (t1 - t0).toFixed(3) + " milliseconds.");
      }
}
fabricarWidget()
const weatherWidget = new WeatherWidget();
weatherWidget.getLocationAndWeather();

});

