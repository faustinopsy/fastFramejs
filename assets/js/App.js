
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
window.addEventListener('load', () => {
      for (const key of ['fetchStart', 'connectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domComplete']) {
        console.log(key, performance.timing[key] - performance.timing.navigationStart);
      }
    });

window.addEventListener('DOMContentLoaded', function(){

const navbar = fabricaMenu();
const footer = fabricaRodape();

document.body.appendChild(navbar)

document.body.appendChild(footer)
document.body.style= "display: flex; justify-content: center;flex-direction: column; width: 80%; margin: 0 auto;"

let tela = {}

//https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
const worker = new Worker('./worker.js');
worker.postMessage({ type: 'fetchData' });

worker.addEventListener('message', async (event) => {
  const { type, data, error } = event.data;

  if (type === 'dadosJson') {
    const { home, sobre, contato } = data;
    tela.home = await fabricaHome(home);
    tela.sobre = await fabricaSobre(sobre);
    tela.contato = await fabricaContato(contato);
    
    document.body.insertBefore(tela.home, footer);
  } else if (type === 'error') {
    console.error('Erro ao buscar estruturas:', error);
  }
});


window.addEventListener('hashchange', function(){
  switch(this.location.hash){
    case '#home':
        removeMain()
        metaHome();
        document.body.insertBefore(tela.home,footer)
    break;
    case '#sobre':
          removeMain()
          metaSobre();
          document.body.insertBefore(tela.sobre,footer)
    break;
    case '#contato':
          removeMain();
          metaContato();
          document.body.insertBefore(tela.contato,footer)
    break;
    default: 
          removeMain();
          metaHome();
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

