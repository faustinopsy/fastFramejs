import * as fabricar from "../../core/Fabrica.js";


export default function fabricaMenu(menu){
    const { header,nav,logo,ul,li,a1,a2,a3 } = menu;
    const novoheader = fabricar.criarContainer(header);
    const novonav = fabricar.criarContainer(nav);
    const novologo = fabricar.criarContainer(logo);
    const novoul = fabricar.criarContainer(ul);
    const novoli = fabricar.criarContainer(li);
    const link1 = fabricar.criarBotao(a1);
    const link2 = fabricar.criarBotao(a2);
    const link3 = fabricar.criarBotao(a3);
    
    novoli.appendChild(novologo)
    novoli.appendChild(link1)
    novoli.appendChild(link2)
    novoli.appendChild(link3)
    novoul.appendChild(novoli)
    novonav.appendChild(novoul)
    novoheader.appendChild(novonav)
  
    return novoheader
    
  }
