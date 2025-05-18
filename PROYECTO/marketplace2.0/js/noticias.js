window.onload = function () {
  mostrarNoticias();
};

function mostrarNoticias() {
  const contenedor = document.getElementById("contenedorNoticias");
  contenedor.innerHTML = "";

  const noticias = JSON.parse(localStorage.getItem("noticias")) || [];

  if (noticias.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.textContent = "Aún no hay noticias publicadas.";
    contenedor.appendChild(mensaje);
    return;
  }

  noticias.forEach(noticia => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "noticia";

    const titulo = document.createElement("h3");
    titulo.textContent = noticia.titulo;

    const fecha = document.createElement("p");
    fecha.className = "fecha-noticia";
    fecha.textContent = formatearFecha(noticia.fecha);

    const contenido = document.createElement("p");
    contenido.textContent = noticia.contenido;

    if (noticia.imagen) {
      const imagen = document.createElement("img");
      imagen.src = noticia.imagen;
      imagen.alt = noticia.titulo;
      imagen.className = "imagen-noticia";
      tarjeta.appendChild(imagen);
    }

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(fecha);
    tarjeta.appendChild(contenido);
    contenedor.appendChild(tarjeta);
  });
}

function formatearFecha(textoFecha) {
  const fecha = new Date(textoFecha);
  const opciones = { day: "2-digit", month: "short", year: "numeric" };
  return fecha.toLocaleDateString("es-PE", opciones).toUpperCase();
}
