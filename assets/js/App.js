
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
import {MonitorarPerformance} from "./componentes/MonitorarPerformance.js";
//https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver
const monitor = new MonitorarPerformance();
  

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
      monitor.medirPerformance('inicio');
  switch(this.location.hash){
    case '#home':
        removeMain()
        metaHome();
        document.body.insertBefore(tela.home,footer)
        monitor.medirPerformance('fim');
        monitor.mensurarPerformance('inicio', 'fim', 'Load Home Time');
    break;
    case '#sobre':
          removeMain()
          metaSobre();
          document.body.insertBefore(tela.sobre,footer)
          monitor.medirPerformance('fim');
          monitor.mensurarPerformance('inicio', 'fim', 'Load sobre Time');
    break;
    case '#contato':
          removeMain();
          metaContato();
          document.body.insertBefore(tela.contato,footer)
          monitor.medirPerformance('fim');
          monitor.mensurarPerformance('inicio', 'fim', 'Load contato Time');
    break;
    default: 
          removeMain();
          metaHome();
          document.body.insertBefore(fabricaHome(),footer)
          monitor.medirPerformance('fim');
          monitor.mensurarPerformance('inicio', 'fim', 'Load Home Time');
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

