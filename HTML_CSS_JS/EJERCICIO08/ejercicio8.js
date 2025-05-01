let main = function() {
    let btn = document.getElementById("btnMostrarOcultar");
    let parrafo = document.getElementById("parrafo");

    btn.addEventListener("click", function() {
        if (parrafo.style.display === "none") {
            parrafo.style.display = "block"; // Mostrar
        } else {
            parrafo.style.display = "none"; // Ocultar
        }
    });

}

main();