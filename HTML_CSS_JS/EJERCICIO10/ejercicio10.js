document.addEventListener('DOMContentLoaded', function() {
    const filas = 8;
    const columnas = 8;

    const tableroIzquierdo = document.getElementById('tablero-izquierdo');
    const tableroDerecho = document.getElementById('tablero-derecho');

    function limpiarTableros() {
        const botones = document.querySelectorAll('button');
        botones.forEach(boton => {
            boton.textContent = '';
        });
    }

    function marcarX(idTablero, fila, columna) {
        if (fila >= 0 && fila < filas && columna >= 0 && columna < columnas) {
            const selector = `#${idTablero} button[data-fila="${fila}"][data-columna="${columna}"]`;
            const boton = document.querySelector(selector);
            if (boton) {
                boton.textContent = 'X';
            }
        }
    }

    function manejarClick(event) {
        const boton = event.target;

        if (boton.tagName !== 'BUTTON') return;

        const fila = parseInt(boton.getAttribute('data-fila'));
        const columna = parseInt(boton.getAttribute('data-columna'));

        // Limpiar los dos tableros antes de pintar
        limpiarTableros();

        // Marcar en tablero izquierdo (normal)
        marcarX('tablero-izquierdo', fila, columna);       // centro
        marcarX('tablero-izquierdo', fila - 1, columna);   // arriba
        marcarX('tablero-izquierdo', fila + 1, columna);   // abajo
        marcarX('tablero-izquierdo', fila, columna - 1);   // izquierda
        marcarX('tablero-izquierdo', fila, columna + 1);   // derecha

        // Calcular posición espejo
        const espejoFila = 7 - fila;
        const espejoColumna = 7 - columna;

        // Marcar en tablero derecho (espejado)
        marcarX('tablero-derecho', espejoFila, espejoColumna);       // centro
        marcarX('tablero-derecho', espejoFila - 1, espejoColumna);   // arriba
        marcarX('tablero-derecho', espejoFila + 1, espejoColumna);   // abajo
        marcarX('tablero-derecho', espejoFila, espejoColumna - 1);   // izquierda
        marcarX('tablero-derecho', espejoFila, espejoColumna + 1);   // derecha
    }

    // Asignar eventos solo al tablero izquierdo
    const botonesIzquierdo = tableroIzquierdo.querySelectorAll('button');
    botonesIzquierdo.forEach(boton => {
        boton.addEventListener('click', manejarClick);
    });
});
