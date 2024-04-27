import {criaElemento, criaTabela } from "./componentes/CriaElemento.js";
import {container, card,form, input,label, botao, widget, table } from "./componentes/Componentes.js";


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
  const novoform = criaElemento(form);
  const novoinput = criaElemento(input);
  const novolabel = criaElemento(label);
  const novowidget = criaElemento(widget);
  
  novocard.appendChild(elementoTabela)
  novoform.appendChild(novolabel)
  novoform.appendChild(novoinput)
  novoform.appendChild(novobotao)
  novocontainer.appendChild(novoform)
 
  novocontainer.appendChild(novocard)
  
  document.body.appendChild(novocontainer)
  document.body.appendChild(novowidget)
}

fabrica()