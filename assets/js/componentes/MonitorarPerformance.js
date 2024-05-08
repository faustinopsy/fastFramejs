export class MonitorarPerformance {
    constructor() {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const entryTypeTranslated = this.traduzirEntrada(entry.entryType);
          console.log(`${entryTypeTranslated} | ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        }
      });
  
      this.observer.observe({
        entryTypes: ['paint', 'mark', 'measure', 'navigation', 'resource', 'longtask']
      });
    }
  
    medirPerformance(marcarNome) {
      performance.mark(marcarNome);
    }
  
    mensurarPerformance(inicio, fim, nome) {
      performance.measure(nome, inicio, fim);
      const medir = performance.getEntriesByName(nome)[0];
      console.log(`${nome}: ${medir.duration.toFixed(2)}ms`);
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
        'longtask': 'Tarefa Longa'
      };
      return traducao[entryType] || entryType;
    }
  }
//   document.addEventListener('DOMContentLoaded', () => {
//    new MonitorarPerformance();
  
//   });
  
