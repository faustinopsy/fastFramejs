import * as fabricar from "./componentes/Fabrica.js";
import * as elemento from "./componentes/Componentes.js";
import * as semantico from "./HtmlSemantico.js";
import adicionarMetaTagsSEO from "./componentes/MetaTags.js";
import WeatherWidget from "./WeatherWidget.js";
function fabricaDemo(){
  const meusDadosDaTabela = {
    th: elemento.table.th,
    td: elemento.table.td,
    id: elemento.table.id || "minha-tabela", 
    className: elemento.table.className || "", 
    style: elemento.table.style || {} 
  };
  
  const elementoTabela = fabricar.criaTabela(meusDadosDaTabela);
  const novocontainer = fabricar.criarContainer(elemento.container);
  const novocard = fabricar.criarCard(elemento.card);
  const novobotao = fabricar.criarBotao(elemento.botao);
  const novoform = fabricar.criarForm(elemento.form);
  const novoinput = fabricar.criarInput(elemento.input);
  const novolabel = fabricar.criarLabel(elemento.label);
  
  
  novocard.appendChild(elementoTabela)
  novoform.appendChild(novolabel)
  novoform.appendChild(novoinput)
  novoform.appendChild(novobotao)
  novocontainer.appendChild(novoform)
 
  novocontainer.appendChild(novocard)
  
  return novocontainer
  //document.body.appendChild(novowidget)
}
function fabricarWidget(){
  return fabricar.criarBotao(elemento.widget);
}
function fabricaSemantico(){
  const novoheader = fabricar.criarContainer(semantico.header);
  const novonav = fabricar.criarContainer(semantico.nav);
  const novoul = fabricar.criarContainer(semantico.ul);
  const novoli = fabricar.criarContainer(semantico.li);
  const link1 = fabricar.criarBotao(semantico.a1);
  const link2 = fabricar.criarBotao(semantico.a2);
  const link3 = fabricar.criarBotao(semantico.a3);
  const novomain = fabricar.criarContainer(semantico.main);
  const novoarticle = fabricar.criarContainer(semantico.article);
  const novosection1 = fabricar.criarContainer(semantico.section1);
  const novosection2 = fabricar.criarContainer(semantico.section2);
  const novoaside = fabricar.criarContainer(semantico.aside);
  const novofooter = fabricar.criarContainer(semantico.footer);
 

  novoli.appendChild(link1)
  novoli.appendChild(link2)
  novoli.appendChild(link3)
  novoul.appendChild(novoli)
  novonav.appendChild(novoul)
  novoheader.appendChild(novonav)

  novoarticle.appendChild(novosection1)
  novoarticle.appendChild(novosection2)
  novomain.appendChild(novoarticle)
  novomain.appendChild(novoaside)
  novoarticle.appendChild(fabricaDemo())
  novofooter.appendChild(fabricarWidget())


  document.body.appendChild(novoheader)
  document.body.appendChild(novomain)
  document.body.appendChild(novofooter)
}
adicionarMetaTagsSEO();
fabricaSemantico()
const weatherWidget = new WeatherWidget();
weatherWidget.getLocationAndWeather();
//fabricaDemo()