self.addEventListener('message', async (event) => {
    const { type } = event.data;
    const paginas = {}
    
    if (type === 'fetchData') {
      try {
        const [arquivoMenu,arquivoHome,arquivoSobre,arquivoContato,arquivoFormulario,] = await Promise.all([
          fetch('/json/menu.json'),
          fetch('/json/home.json'),
          fetch('/json/sobre.json'),
          fetch('/json/contato.json'),
          fetch('/json/formulario.json')
        ]);
        const menu = await arquivoMenu.json();
        const home = await arquivoHome.json();
        const sobre = await arquivoSobre.json();
        const contato = await arquivoContato.json();
        const formulario = await arquivoFormulario.json();
        contato.section2.conteudo = formulario
        //   for(conteudo in menu){
        //     if(menu[conteudo].hash){
        //       const resultado = await fetch(`/json/${menu[conteudo].hash}.json`)
        //       const jsonPai = await resultado.json()
              
        //       for(jsonInterno in jsonPai){
                
        //         if(jsonPai[jsonInterno].conteudo){
        //          const resinterno = await fetch(jsonPai[jsonInterno].conteudo.json)
        //          const res = await resinterno.json()
        //          jsonPai[jsonInterno].conteudo = res
        //         } 
        //       }
              
             
        //       Object.defineProperty(paginas,  `${menu[conteudo].hash}`, {value: jsonPai })
        //     } 
        //   }
        // const home = paginas.home;
        // const sobre = paginas.sobre;
        // const contato = paginas.contato;
        self.postMessage({ type: 'dadosJson', data: {menu, home, sobre, contato } });
      } catch (error) {
        self.postMessage({ type: 'error', error: error.message });
      }
    }
  });
  