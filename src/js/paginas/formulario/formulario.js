import * as fabricar from "../../core/Fabrica.js";

export default function fabricaForm(formulario){
    const { card, botaoEnvia, labelnome, inputnome, labelemail, inputemail, form } = formulario;
    const novoform = fabricar.criarContainer(form);
    const novocard = fabricar.criarContainer(card);
    const novolabelnome = fabricar.criarContainer(labelnome);
    const novoinputnome = fabricar.criarContainer(inputnome);
    const novolabelemail = fabricar.criarContainer(labelemail);
    const novoinputemail = fabricar.criarContainer(inputemail);
    const novobotaoEnvia = fabricar.criarContainer(botaoEnvia);
   
    novoform.appendChild(novolabelnome)
    novoform.appendChild(novoinputnome)
    novoform.appendChild(novolabelemail)
    novoform.appendChild(novoinputemail)
    novoform.appendChild(novobotaoEnvia)
    novocard.appendChild(novoform)
    
    return novocard
    
  }




