function cerrarSesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("sesionActiva");
  window.location.href = "../index.html";
}

var noticias = JSON.parse(localStorage.getItem("noticias")) || [];
var form = document.getElementById("formNoticia");
var tabla = document.getElementById("tablaNoticias");
var btnGuardar = document.getElementById("btnGuardar");

btnGuardar.addEventListener("click", function () {
  var titulo = document.getElementById("titulo").value;
  var contenido = document.getElementById("contenido").value;
  var fecha = document.getElementById("fecha").value;
  var indice = document.getElementById("editandoIndice").value;

  var noticia = { titulo: titulo, contenido: contenido, fecha: fecha };

  if (indice === "") {
    noticias.push(noticia);
  } else {
    noticias[indice] = noticia;
  }

  localStorage.setItem("noticias", JSON.stringify(noticias));
  form.reset();
  document.getElementById("editandoIndice").value = "";
  mostrarNoticias();
});

function mostrarNoticias() {
  tabla.innerHTML = "";

  for (var i = 0; i < noticias.length; i++) {
    var fila = document.createElement("tr");

    var tdTitulo = document.createElement("td");
    tdTitulo.textContent = noticias[i].titulo;

    var tdContenido = document.createElement("td");
    tdContenido.textContent = noticias[i].contenido;

    var tdFecha = document.createElement("td");
    tdFecha.textContent = noticias[i].fecha;

    var tdOpciones = document.createElement("td");

    var btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.onclick = (function (index) {
      return function () {
        editarNoticia(index);
      };
    })(i);

    var btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = (function (index) {
      return function () {
        eliminarNoticia(index);
      };
    })(i);

    tdOpciones.appendChild(btnEditar);
    tdOpciones.appendChild(btnEliminar);

    fila.appendChild(tdTitulo);
    fila.appendChild(tdContenido);
    fila.appendChild(tdFecha);
    fila.appendChild(tdOpciones);

    tabla.appendChild(fila);
  }
}

function editarNoticia(index) {
  var noticia = noticias[index];
  document.getElementById("titulo").value = noticia.titulo;
  document.getElementById("contenido").value = noticia.contenido;
  document.getElementById("fecha").value = noticia.fecha;
  document.getElementById("editandoIndice").value = index;
}

function eliminarNoticia(index) {
  noticias.splice(index, 1);
  localStorage.setItem("noticias", JSON.stringify(noticias));
  mostrarNoticias();
}

function cancelarEdicion() {
  form.reset();
  document.getElementById("editandoIndice").value = "";
}

mostrarNoticias();
