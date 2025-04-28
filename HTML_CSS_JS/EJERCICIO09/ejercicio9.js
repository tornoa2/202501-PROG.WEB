let turno = "X"; // El primer jugador es X
let titulo = document.getElementById("titulo");
let casillas = [];

let main = function() {
    // Buscar todos los botones dentro del container
    let container = document.querySelector(".container");
    casillas = container.querySelectorAll("button");

    casillas.forEach(casilla => {
        casilla.addEventListener("click", jugarTurno);
    });
};

let jugarTurno = function() {
    // Si la casilla ya tiene algo escrito, no hacer nada
    if (this.innerText !== "") {
        return;
    }

    // Marcar la casilla con el turno actual
    this.innerText = turno;

    // Verificar si hay ganador o empate
    if (verificarGanador()) {
        titulo.innerText = `Jugador ${turno} ganó`;
        deshabilitarCasillas();
    } else if (verificarEmpate()) {
        titulo.innerText = "Empate";
        deshabilitarCasillas();
    } else {
        // Cambiar el turno
        turno = (turno === "X") ? "O" : "X";
    }
};

let verificarGanador = function() {
    const combinacionesGanadoras = [
        [0, 1, 2], // fila 1
        [3, 4, 5], // fila 2
        [6, 7, 8], // fila 3
        [0, 3, 6], // columna 1
        [1, 4, 7], // columna 2
        [2, 5, 8], // columna 3
        [0, 4, 8], // diagonal principal
        [2, 4, 6]  // diagonal secundaria
    ];

    for (let combinacion of combinacionesGanadoras) {
        let [a, b, c] = combinacion;
        if (
            casillas[a].innerText === turno &&
            casillas[b].innerText === turno &&
            casillas[c].innerText === turno
        ) {
            return true;
        }
    }
    return false;
};

let verificarEmpate = function() {
    for (let casilla of casillas) {
        if (casilla.innerText === "") {
            return false; // Aún hay espacio
        }
    }
    return true;
};

let deshabilitarCasillas = function() {
    casillas.forEach(casilla => {
        casilla.disabled = true;
    });
};

main();
