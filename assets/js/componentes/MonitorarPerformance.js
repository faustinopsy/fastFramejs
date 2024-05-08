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
  
    marcar(marcarNome) {
      performance.marcar(marcarNome);
    }
  
    mensurar(inicio, fim, nome) {
      performance.measure(nome, inicio, fim);
      const medir = performance.getEntriesByNome(nome)[0];
      console.log(`${nome}: ${medir.duration.toFixed(2)}ms`);
      this.clearmarcars(inicio, fim);
      this.clearMeasure(nome);
    }
  
    clearmarcars(inicio, fim) {
      performance.clearmarcars(inicio);
      performance.clearmarcars(fim);
    }
  
    clearMeasure(nome) {
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
  
