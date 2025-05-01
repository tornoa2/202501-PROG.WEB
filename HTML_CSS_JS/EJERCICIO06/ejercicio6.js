let main = function(){
    let btnAgregarElemento = document.getElementById("agregarElemento");
    let lista = document.getElementById("lista");

    btnAgregarElemento.addEventListener("click", function(){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.innerText = "Nuevo elemento";
        lista.appendChild(nuevoElemento);
    });
}

main();