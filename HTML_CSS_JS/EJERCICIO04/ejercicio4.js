let main = function() {
    let btn = document.getElementById("btnCambiarTexto");
    let parrafo = document.getElementById("parrafo");

    btn.addEventListener("click", function() {
        parrafo.innerText = "Texto modificado!";
    });
}

main();