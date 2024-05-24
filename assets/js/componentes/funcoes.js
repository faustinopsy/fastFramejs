const funcoes = {
    navHome: function(){
        location.hash = '#home'
    },
    navSobre: function(){
        location.hash = '#sobre'
    },
    navContato: function(){
        location.hash = '#contato'
    },
    btnForm: function(e) {
        e.preventDefault()
            const nome = document.querySelector('#inputnome').value
            const email = document.querySelector('#inputemail').value
            console.log(`Nome: ${nome} - E-mail: ${email}` )
        alert('dados no console')
    },
    fnCEP: async function(e){
        e.preventDefault()
        const cep = document.querySelector('#inputcep').value
        if(cep==='' || !Number(cep)) {
          alert("preencha o campo com números")
          document.querySelector('#inputcep').value=''
          return
        }
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json();
        console.log(
          ` 
          cep: ${json.cep} ,
          logradouro: ${json.logradouro} ,
          complemento: ${json.complemento} ,
          bairro: ${json.bairro} ,
          localidade: ${json.localidade} ,
          uf: ${json.uf} ,
          ibge: ${json.ibge} ,
          gia: ${json.gia} ,
          ddd: ${json.ddd} ,
          siafi: ${json.siafi} 
          ` 
      )
        alert('dados no console')
      }
}
export default funcoes;
