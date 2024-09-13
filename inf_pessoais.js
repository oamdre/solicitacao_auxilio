function validarFormulario() {
    const cpfInput = document.getElementById('cpf');
    const rgInput = document.getElementById('rg');
    const cepInput = document.getElementById('cep');
    const telefoneInput = document.getElementById('telefone');
    const estadoInput = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade');
    const bairroInput = document.getElementById('bairro');
    const enderecoInput = document.getElementById('endereco');

    if (!cpfInput.value || !rgInput.value || !cepInput.value || !estadoInput.value || !cidadeInput.value || !bairroInput.value || !enderecoInput.value || !telefoneInput.value) {
        alert("Preencha todos os campos corretamente.");
        return; 
    }

    if (cpfInput.value.length !== 14 || rgInput.value.length !== 12 || cepInput.value.length !== 9 || telefoneInput.value.length !== 15) {
        alert("Preencha todos os campos corretamente.");
        return; 
    }

    const regexSomenteLetras = /^[a-zA-ZÀ-ÖØ-öø-ÿÁÉÍÓÚáéíóúÃÕãõÄËÏÖÜŸäëïöüÿÀ̀Á́ẪÃ̃Ç̀Ç̃È́ỄË̀É̃Ì́Î̃Ï̀Í̃Ò́ỖÕ̃Ù́Û̃ǛÚ̃ỲỳỸỹỶỷỴỵ\s-]+$/;

    if (!cidadeInput.value.match(regexSomenteLetras)) {
        alert("Por favor, insira somente letras no campo de cidade.");
        return;
    }

    window.location.href = 'form_financeiro.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const cpfInput = document.getElementById('cpf');
    const rgInput = document.getElementById('rg');
    const cepInput = document.getElementById('cep');
    const telefoneInput = document.getElementById('telefone');
    const cidadeInput = document.getElementById('cidade');

    cpfInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11); 
        this.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); 
    });

    rgInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, ''); 
        if (value.length > 9) value = value.slice(0, 9); 
        this.value = value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3-$4'); 
    });

    cepInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 8) value = value.slice(0, 8); 
        this.value = value.replace(/(\d{5})(\d{3})/, '$1-$2'); 
    });

    telefoneInput.addEventListener('input', function () {
        let value = this.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11); 
        this.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); 
    });
});
