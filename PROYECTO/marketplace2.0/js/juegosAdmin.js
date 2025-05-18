let juegos = [];

window.onload = function () {
  const datosGuardados = localStorage.getItem("juegos");
  if (datosGuardados) {
    juegos = JSON.parse(datosGuardados);
  }
  aplicarFiltros();
  actualizarFiltroCategorias();
};

function mostrarFormulario(indice = null) {
  document.getElementById("formulario").style.display = "block";
  
  document.querySelectorAll('input[name="plataforma"]').forEach(input => {
    input.checked = false;
  });

  if (indice !== null) {
    const juego = juegos[indice];
    document.getElementById("nombre").value = juego.nombre;
    document.getElementById("categoria").value = juego.categoria;
    document.getElementById("precio").value = juego.precio;
    document.getElementById("fecha").value = juego.fecha;
    document.getElementById("descuento").value = juego.descuento || 0;
    document.getElementById("editandoIndice").value = indice;
    document.getElementById("tituloForm").innerText = "Editar Juego";

    const selectCategorias = document.getElementById("categoria");
    Array.from(selectCategorias.options).forEach(option => {
      option.selected = Array.isArray(juego.categoria) && juego.categoria.includes(option.value);
    });

    if (Array.isArray(juego.plataformas)) {
      juego.plataformas.forEach(p => {
        const checkbox = document.querySelector(`input[name="plataforma"][value="${p}"]`);
        if (checkbox) checkbox.checked = true;
      });
    }
  } else {
    document.getElementById("nombre").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("descuento").value = 0;
    document.getElementById("editandoIndice").value = "";
    document.getElementById("tituloForm").innerText = "Agregar Juego";
  }
}

function guardarJuego() {
  const nombre = document.getElementById("nombre").value.trim();
  const categoria = Array.from(document.getElementById("categoria").selectedOptions).map(opt => opt.value);
  const precio = parseFloat(document.getElementById("precio").value);
  const fecha = document.getElementById("fecha").value;
  const descuento = parseFloat(document.getElementById("descuento").value) || 0;
  const indice = document.getElementById("editandoIndice").value;
  const plataformas = Array.from(document.querySelectorAll('input[name="plataforma"]:checked')).map(input => input.value);
  
  if (!nombre || !categoria || isNaN(precio) || !fecha) {
    alert("Completa todos los campos obligatorios.");
    return;
  }
  
  const carpeta = nombre.replaceAll(' ', '_');
  const juego = { nombre, categoria, precio, fecha, descuento, carpeta, plataformas,visible: false};
  
  if (indice === "") {
    juego.visible = false;
    juegos.push(juego);
  } else {
    juego.visible = juegos[indice].visible;
    juegos[indice] = juego;
  }
  
  guardarEnLocalStorage();
  aplicarFiltros();
  actualizarFiltroCategorias();
  cancelar();
}

function eliminarJuego(i) {
  juegos.splice(i, 1);
  guardarEnLocalStorage();
  aplicarFiltros();
  actualizarFiltroCategorias();
}

function editarJuego(i) {
  mostrarFormulario(i);
  actualizarFiltroCategorias();
}

function aplicarFiltros() {
  const categoria = document.getElementById("filtroCategoria").value;
  const fechaDesde = document.getElementById("filtroFechaDesde").value;
  const precioMax = document.getElementById("filtroPrecioMax").value;

  const cuerpo = document.querySelector("#tablaJuegos tbody");
  cuerpo.innerHTML = "";

  juegos.forEach((juego, i) => {
    if (
      (categoria && (!Array.isArray(juego.categoria) || !juego.categoria.includes(categoria))) ||
      (fechaDesde && juego.fecha < fechaDesde) ||
      (precioMax && parseFloat(juego.precio) > parseFloat(precioMax))
    ) {
      return;
    }

    const precioFinal = juego.precio * (1 - (juego.descuento || 0) / 100);

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${juego.nombre}</td>
      <td>${juego.categoria}</td>
      <td>S/${parseFloat(juego.precio).toFixed(2)}</td>
      <td>${juego.descuento || 0}%</td>
      <td>S/${precioFinal.toFixed(2)}</td>
      <td>${juego.fecha}</td>
      <td>
        <button onclick="editarJuego(${i})">Editar</button>
        <button onclick="eliminarJuego(${i})">Eliminar</button>
        <button onclick="alternarVisibilidad(${i})"
          class="boton-estado"
          style="background-color: ${juego.visible ? '#4caf50' : '#f44336'}"
          title="${juego.visible ? 'Ocultar juego' : 'Mostrar juego'}">
          ●
        </button>
      </td>
    `;
    cuerpo.appendChild(fila);
  });
}

function cancelar() {
  document.getElementById("formulario").style.display = "none";
}

function guardarEnLocalStorage() {
  localStorage.setItem("juegos", JSON.stringify(juegos));
}

function actualizarFiltroCategorias() {
  const filtro = document.getElementById("filtroCategoria");
  filtro.innerHTML = '<option value="">Todas</option>';

  const categoriasUsadas = new Set();

  juegos.forEach(j => {
    if (Array.isArray(j.categoria)) {
      j.categoria.forEach(c => categoriasUsadas.add(c));
    } else if (typeof j.categoria === "string") {
      categoriasUsadas.add(j.categoria);
    }
  });

  Array.from(categoriasUsadas).sort().forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    filtro.appendChild(option);
  });
}

/*funcion para limitar la seleccion de categorias*/
function limitarSeleccion(selectElement) {
  const seleccionadas = Array.from(selectElement.selectedOptions);
  if (seleccionadas.length > 4) {
    seleccionadas[seleccionadas.length - 1].selected = false;
  }
}

/* Boton para ocultar el juego, en caso no se quiera eliminar del todo*/
function alternarVisibilidad(i) {
  juegos[i].visible = !juegos[i].visible;
  guardarEnLocalStorage();
  aplicarFiltros();
}

