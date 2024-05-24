self.addEventListener('message', async (event) => {
    const { type } = event.data;
  
    if (type === 'fetchData') {
      try {
        const [arquivoHome, arquivoSobre, arquivoContato] = await Promise.all([
          fetch('/json/home.json'),
          fetch('/json/sobre.json'),
          fetch('/json/contato.json')
        ]);
  
        const home = await arquivoHome.json();
        const sobre = await arquivoSobre.json();
        const contato = await arquivoContato.json();
            for(conteudo in contato){
              if(contato[conteudo].conteudo){
                //console.log(contato[conteudo].conteudo)
               const resultado = await fetch(contato[conteudo].conteudo.json)
               const res = await resultado.json()
               contato.form = res 
              } 
            }
          
          
  
        self.postMessage({ type: 'dadosJson', data: { home, sobre, contato } });
      } catch (error) {
        self.postMessage({ type: 'error', error: error.message });
      }
    }
  });
  