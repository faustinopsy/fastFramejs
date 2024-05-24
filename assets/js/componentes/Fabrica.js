import Elemento from "./FastFrame.js";

export function criarContainer(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarCard(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarBotao(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarForm(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarLabel(elemento) {
  return new Elemento(elemento).gerarElemento();
}

export function criarInput(elemento) {
  return new Elemento(elemento).gerarElemento();
}


export function criaTabela(dadosTabela) {
  if (!dadosTabela.th || !dadosTabela.td) {
    console.error("Parâmetros th e td obrigatórios para criar tabela!");
    return null;
  }

  const tabela = new Elemento({
    tipo: "table",
    id: dadosTabela.id || "tabela-dinamica",
    className: dadosTabela.className || "",
  });

  const thead = new Elemento({
    tipo: "thead",
  });

  const linhaCabecalho = new Elemento({
    tipo: "tr",
  });

  for (const coluna in dadosTabela.th) {
    const celulaCabecalho = new Elemento({
      tipo: "th",
      textContent: dadosTabela.th[coluna],
    });
    linhaCabecalho.novoElemento.appendChild(celulaCabecalho.gerarElemento());
  }

  thead.novoElemento.appendChild(linhaCabecalho.gerarElemento());
  tabela.novoElemento.appendChild(thead.gerarElemento());

  const tbody = new Elemento({
    tipo: "tbody",
  });

  dadosTabela.td.forEach((linha) => {
    const linhaTabela = new Elemento({
      tipo: "tr",
    });

      for (const propriedade in dadosTabela.td[0]) {
        const valorCelula = linha[propriedade];
        
        const celula = new Elemento({
          tipo: "td",
          textContent: valorCelula,
        });
        linhaTabela.novoElemento.appendChild(celula.gerarElemento());
      }
    

    tbody.novoElemento.appendChild(linhaTabela.gerarElemento());
  });
  if(dadosTabela.style){
    let css='';
    for(let style in dadosTabela.style){
      css += `${style} : ${dadosTabela.style[style]}; `
    }
    tabela.novoElemento.setAttribute("style", css)
  }  
  tabela.novoElemento.appendChild(tbody.gerarElemento());

  return tabela.gerarElemento();
}
