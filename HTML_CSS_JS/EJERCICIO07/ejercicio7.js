let main = function() {
    let btnEliminar = document.getElementById("eliminarElemento");
    let lista = document.getElementById("lista");

    btnEliminar.addEventListener("click", function() {
        if (lista.lastElementChild) {
            lista.removeChild(lista.lastElementChild);
        } else {
            console.log("No hay elementos para eliminar.");
        }
    });
}

main();