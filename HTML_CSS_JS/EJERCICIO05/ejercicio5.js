let main = function(){
    let btnColor = document.getElementById("btnCambiarColor");
    let parrafo = document.getElementById("parrafo");

    btnColor.addEventListener("click", function(){
        let colores = ["red", "blue", "green", "yellow", "purple"];
        let colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        parrafo.style.backgroundColor = colorAleatorio;
    });
}

main();