document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("myForm"); 
    var overlay = document.getElementById("overlay"); 
    var closeOverlay = document.getElementById("closeOverlay");
    var showOverlay = false; 

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const situacao = document.getElementById('situacao').value;
        const renda = document.getElementById('renda').value;
        const dependentes = document.getElementById('dependentes').value;
        const mensagem = document.getElementById('mensagem').value;

        if (!situacao || !renda || !dependentes || !mensagem) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        showOverlay = true; 
        overlay.style.display = "flex"; 
    });

    closeOverlay.addEventListener("click", function() {
        overlay.style.display = "none"; 
    });

    window.addEventListener("pageshow", function(event) {
        if (event.persisted || (performance.navigation && performance.navigation.type == 2)) {
            showOverlay = false; 
            overlay.style.display = "none"; 
        }
    });

    document.getElementById('renda').addEventListener('input', function(event) {
        let renda = event.target.value.replace(/\D/g, ''); 
        renda = parseFloat(renda) / 100; 
        event.target.value = renda.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
});
