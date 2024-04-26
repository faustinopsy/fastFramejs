import {criaElemento, criaTabela } from "./componentes/CriaElemento.js";
import {container, card, input, botao, widget, table } from "./componentes/Componentes.js";


function fabrica(){
  const meusDadosDaTabela = {
    th: table.th,
    td: table.td,
    id: table.id || "minha-tabela", 
    className: table.className || "", 
    style: table.style || {} 
  };

  const elementoTabela = criaTabela(meusDadosDaTabela);
  const novocontainer = criaElemento(container);
  const novocard = criaElemento(card);
  const novobotao = criaElemento(botao);
  const novowidget = criaElemento(widget);
  const novoinput = criaElemento(input);
  
  
  novocard.appendChild(elementoTabela)
  novocontainer.appendChild(novoinput)
  novocontainer.appendChild(novobotao)
  novocontainer.appendChild(novocard)
  
  document.body.appendChild(novocontainer)
  document.body.appendChild(novowidget)
}

fabrica()