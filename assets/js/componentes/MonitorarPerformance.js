import * as fabricar from "./Fabrica.js";
export class MonitorarPerformance {
    constructor() {
      this.modal = this.createModal();
      this.fabricaWidget();
      this.iniciarMonitor();
  }
  iniciarMonitor(){
    //detalhes
    //https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming
    this.observer = new PerformanceObserver((list) => {
      //console.log(list.getEntries())
      for (const entry of list.getEntries()) {
        const entryTypeTranslated = this.traduzirEntrada(entry.entryType);
        console.log(`${entryTypeTranslated} | ${entry.name}: ${entry.duration.toFixed(2)}ms`);
      }
      window.addEventListener('load', () => {
        const lista = document.getElementById("pc-info")
        for (const key of ['fetchStart', 'connectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domComplete']) {
          const listainterna = document.createElement('li')
          listainterna.innerHTML += `${key} : ${performance.timing[key] - performance.timing.navigationStart} ms \n`;
          lista.appendChild(listainterna)
        }
    });
    list.getEntries().forEach((entry) => {
      console.log(entry);
    });
    });

    this.observer.observe({
      entryTypes: ['paint', 'mark', 'measure', 'navigation', 'resource', 'longtask']
    });
  }
  fabricaWidget(){
      const widget = {
          tipo: 'button',
          id: 'btn009',
          textContent: '',
          placeholder: '',
          title : 'monitor',
          'aria-label': 'monitor',
          style:{
            position:   'fixed',
            bottom:   '30px',
            left: '30px',
            width: '230px',
            height: '230px',
            background: 'rgba(0, 0, 0, 0.5)',
            'z-index': '99999',
            'background-image': 'url()',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            color: 'white',
            border: 'white',
            'border-radius': '0px 20px 0 20px',
            'box-shadow': '0 4px 8px rgba(0, 0, 0, 0.5)',
            cursor: 'pointer',
          }
        };
        return fabricar.criarBotao(widget)
  }
  createModal() {
      const modal = this.fabricaWidget()
      modal.classList.add('modal');
      modal.innerHTML = `
          <div class="modal-content">Fetch
              <span class="close" style="position:relative;left:100px;width:40px heigth:40px">&times;</span>
              <ul id="pc-info"></ul>
          </div>
      `;
      document.body.appendChild(modal);

      const closeButton = modal.querySelector('.close');
      closeButton.addEventListener('click', () => {
          modal.style.display = 'none';
      });
      this.moverWidget(modal)
      return modal;
  }
  moverWidget(element) {
      let isDragging = false;
      let offsetX = 0;
      let offsetY = 0;
  
      element.addEventListener('mousedown', (e) => {
          isDragging = true;
          offsetX = e.clientX - element.getBoundingClientRect().left;
          offsetY = e.clientY - element.getBoundingClientRect().top;
          element.style.cursor = 'grabbing';
      });
  
      document.addEventListener('mousemove', (e) => {
          if (isDragging) {
              element.style.left = e.clientX - offsetX + 'px';
              element.style.top = e.clientY - offsetY + 'px';
              element.style.right = 'auto'; 
              element.style.bottom = 'auto'; 
          }
      });
  
      document.addEventListener('mouseup', () => {
          isDragging = false;
          element.style.cursor = 'grab';
      });
  }
    medirPerformance(marcarNome) {
      performance.mark(marcarNome);
    }
  
    mensurarPerformance(inicio, fim, nome) {
      performance.measure(nome, inicio, fim);
      this.clearmark(inicio, fim);
      this.clearmark(nome);
    }
  
    clearmarcar(inicio, fim) {
      performance.clearmark(inicio);
      performance.clearmark(fim);
    }
  
    clearmark(nome) {
      performance.clearMeasures(nome);
    }
  
    traduzirEntrada(entryType) {
      const traducao = {
        'paint': 'Pintura',
        'mark': 'Marca',
        'measure': 'Medição',
        'navigation': 'Navegação',
        'resource': 'Recurso',
        'longtask': 'Tarefa Longa',
        'responseEnd': 'Final da resposta',
        'domComplete': 'Dom Completo'
      };
      return traducao[entryType] || entryType;
    }
  }
//   document.addEventListener('DOMContentLoaded', () => {
//    new MonitorarPerformance();
  
//   });
  
