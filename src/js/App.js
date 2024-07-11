import fabricaMenu from "./paginas/nav/menu.js";
import fabricaRodape from "./paginas/footer/rodape.js";
import { fabricaHome,metaTagsHome } from "./paginas/home.js";
import { fabricaSobre,metaTagsSobre } from "./paginas/sobre.js";
import { fabricaContato,metaTagsContato } from "./paginas/contato.js";
import WeatherWidget from "./WeatherWidget.js";
import { MonitorarPerformance } from "./componentes/MonitorarPerformance.js";

//https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver
const monitor = new MonitorarPerformance();

const worker = new Worker('./worker.js');
worker.postMessage({ type: 'fetchData' });

//padrao de projeto COmmand
//https://pt.wikipedia.org/wiki/Command
class PJCommand {
    constructor(execute, meta) {
        this.execute = execute;
        this.meta = meta;
    }
}



window.addEventListener('DOMContentLoaded', function () {
    let navbar = null;
    let footer = null; 
    let tela = {};
    //document.body.appendChild(navbar);
    
    document.body.style = "display: flex; justify-content: center; flex-direction: column; width: 80%; margin: 0 auto;";

    
const PJCommands = {
    '#home': new PJCommand(
        () => document.body.insertBefore(tela.home, footer),
        metaTagsHome
    ),
    '#sobre': new PJCommand(
        () => document.body.insertBefore(tela.sobre, footer),
        metaTagsSobre
    ),
    '#contato': new PJCommand(
        () => document.body.insertBefore(tela.contato, footer),
        metaTagsContato
    ),
    'default': new PJCommand(
        async () => document.body.insertBefore(tela.home, footer),
        metaTagsHome
    )
};



worker.addEventListener('message', async (event) => {
      const { type, data, error } = event.data;
      if (type === 'dadosJson') {
      const {menu, home, sobre, contato } = data;
      navbar = fabricaMenu(menu);
      document.body.insertBefore(navbar,document.querySelector("main"));
      footer = fabricaRodape();
      document.body.appendChild(footer);

      tela.home = await fabricaHome(home);
      tela.sobre = await fabricaSobre(sobre);
      tela.contato = await fabricaContato(contato);
      const PJCommand = PJCommands[location.hash] || PJCommands['default'];
      PJCommand.execute();
      } else if (type === 'error') {
      console.error('Erro ao buscar estruturas:', error);
      }
});

window.addEventListener('hashchange', function () {
      const PJCommand = PJCommands[location.hash] || PJCommands['default'];
      removeMain();
      PJCommand.meta();
      PJCommand.execute();
});

function removeMain() {
      let main = document.querySelector("main");
      document.querySelector("head").innerHTML = '';
      if (main && main.parentNode) {
      main.parentNode.removeChild(main);
      }
}


const weatherWidget = new WeatherWidget();
weatherWidget.getLocationAndWeather();

});
