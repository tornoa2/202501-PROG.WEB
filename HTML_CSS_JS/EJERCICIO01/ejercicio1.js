let butEnviarOnClick = function() {
    let inputNombre = document.getElementById("nombre");
    let inputCorreo = document.getElementById("correo");
    let inputMensaje = document.getElementById("mensaje");
    let divAreaMensaje = document.getElementById("areaMensaje");

    //1. Verificar que las cajas no estén vacías
    if (inputNombre.value == "" || inputCorreo.value == "" || inputMensaje.value == "") {
        console.error("Los campos no pueden estar vacíos.");
        divAreaMensaje.innerText = "Los campos no pueden estar vacíos.";
        return;
    }

    //2. Verificar que el formato del email sea correcto (@ y .com)
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputCorreo.value)) {
        console.error("El formato del correo electrónico es incorrecto.");
        divAreaMensaje.innerText = "El formato del correo electrónico es incorrecto.";
        return;
    }

    //3. Pintar que se envio correctamente el formulario
    console.log("Formulario enviado correctamente.");
    divAreaMensaje.innerText = "Formulario enviado correctamente.";
}

let main = function() {
    let butEnviar = document.getElementById("butEnviar");
    butEnviar.addEventListener("click", butEnviarOnClick);
}

main();