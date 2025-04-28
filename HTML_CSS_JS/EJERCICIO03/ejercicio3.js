let contador = 0;

let main = function() {
    let btnContar = document.getElementById("btnContar");
    let pContador = document.getElementById("contador");

    btnContar.addEventListener("click", function() {
        contador++;
        pContador.innerText = "Clicks: " + contador;
        
        if (contador === 10) {
            pContador.style.color = "red";
        }
    });
}

main();