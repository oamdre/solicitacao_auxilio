function validarFormulario() {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const dataNascimento = document.getElementById('data-nascimento').value;
    const genero = document.getElementById('genero').value;
    const email = document.getElementById('email').value;

    if (!nome || !sobrenome || !dataNascimento || !genero || !email) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const regexSomenteLetras = /^[a-zA-ZÀ-ÖØ-öø-ÿÁÉÍÓÚáéíóúÃÕãõÄËÏÖÜŸäëïöüÿÀ̀Á́ẪÃ̃Ç̀Ç̃È́ỄË̀É̃Ì́Î̃Ï̀Í̃Ò́ỖÕ̃Ù́Û̃ǛÚ̃ỲỳỸỹỶỷỴỵ\s]+$/;
    if (!nome.match(regexSomenteLetras)) {
        alert("Por favor, insira somente letras no campo de nome.");
        return;
    }
    if (!sobrenome.match(regexSomenteLetras)) {
        alert("Por favor, insira somente letras no campo de sobrenome.");
        return;
    }

    const dataNascimentoFormatada = new Date(dataNascimento);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimentoFormatada.getFullYear();
    const mes = hoje.getMonth() - dataNascimentoFormatada.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimentoFormatada.getDate())) {
        idade--;
    }
    if (idade < 18) {
        alert("Benefício concedido somente para maiores de 18 anos.");
        return;
    }

    const regexEmail = /\S+@\S+\.\S+/;
    if (!email.match(regexEmail)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    window.location.href = 'inf_pessoais.html';
}
