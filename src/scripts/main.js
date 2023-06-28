document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#form_sorteador").addEventListener("submit", function(evento){
        evento.preventDefault();
        
        let numeroMaximo = document.querySelector("#numero_maximo").value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        document.querySelector("#resultado_valor").innerText = numeroAleatorio;
        document.querySelector(".resultado").style.display = "block";
    })
})