document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario_json');
    const jsonData = document.getElementById('dados_json');
    const numeroLinha = document.getElementById('linhaNumeros');
    function validarJson(jsonString) {
        try {
            jsonlint.parse(jsonString);
            return true;
        } catch (e) {
            const errorMessage = e.message;
            const match = errorMessage.match(/line (\d+)/);
            if (match) {
                const numeroLinha = match[1];
                alert(`Erro de JSON na linha ${numeroLinha}: ${errorMessage}`);
            } else {
                alert(`Erro de JSON: ${errorMessage}`);
            }
            return false;
        }
    }

    function validarFormulario() {
        if (!validarJson(jsonData.value)) {
            jsonData.style.border = '2px solid red';
            return false;
        }
        jsonData.style.border = '2px solid green';
        return true;
    }

    jsonData.addEventListener('blur', validarFormulario);
    form.addEventListener('submit', function(e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });

    function atualizarLinha() {
        const lines = jsonData.value.split('\n');
        console.log(lines.length)
        for(let i=1; i <= lines.length; i++){
            numeroLinha.innerHTML += Array(lines).fill(`<span>${i}</span>`).join('');
        }
        
    }

    jsonData.addEventListener('input', atualizarLinha);
    jsonData.addEventListener('scroll', () => {
        numeroLinha.scrollTop = jsonData.scrollTop;
    });
    jsonData.addEventListener('blur', validarFormulario);
    form.addEventListener('submit', function(e) {
        if (!validarFormulario()) {
            e.preventDefault();
        }
    });

    atualizarLinha();
});