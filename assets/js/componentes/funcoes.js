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
        const form  = document.querySelector('#formcep')
        if(cep==='' || !Number(cep)) {
          alert("preencha o campo com números")
          document.querySelector('#inputcep').value=''
          return
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const json = await response.json();
        const divx = document.createElement('div')
        divx.innerHTML = ` 
        cep: ${json.cep}, <br>
        logradouro: ${json.logradouro},<br>
        complemento: ${json.complemento}, <br>
        bairro: ${json.bairro}, <br>
        localidade: ${json.localidade}, <br>
        uf: ${json.uf}, <br>
        ibge: ${json.ibge}, <br>
        gia: ${json.gia}, <br>
        ddd: ${json.ddd}, <br>
        siafi: ${json.siafi}<br> 
        ` 
        form.appendChild(divx)
        
      }
}
export default funcoes;
