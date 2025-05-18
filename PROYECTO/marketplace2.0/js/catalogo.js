const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
const contenedor = document.getElementById("catalogo");

if (juegos.length === 0) {
  const mensaje = document.createElement("p");
  mensaje.textContent = "Aún no hay juegos disponibles.";
  contenedor.appendChild(mensaje);
} else {
  for (let i = 0; i < juegos.length; i++) {
    const juego = juegos[i];
    if (juego.visible === false) continue;

    const descuento = juego.descuento || 0;
    const precioFinal = juego.precio * (1 - descuento / 100);

    const divJuego = document.createElement("div");
    divJuego.className = "juego-item";

    // Imagen
    const imagen = document.createElement("img");
    imagen.src = "assets/img/" + juego.carpeta + "/header.png";
    imagen.alt = juego.nombre;
    imagen.className = "juego-img";
    imagen.onerror = function () {
      this.src = "assets/img/placeholder.jpg";
    };
    divJuego.appendChild(imagen);

    // Info
    const info = document.createElement("div");
    info.className = "juego-item-body";

    const titulo = document.createElement("h3");
    titulo.textContent = juego.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "juego-descripcion";
    descripcion.textContent = Array.isArray(juego.categoria) ? juego.categoria.join(", ") : juego.categoria;

    const plataformas = document.createElement("div");
    plataformas.className = "juego-plataformas";
    plataformas.innerHTML = obtenerIconosPlataforma(juego.plataformas || []);

    const infoContainer = document.createElement("div");
    infoContainer.className = "juego-info";
    infoContainer.appendChild(titulo);
    infoContainer.appendChild(plataformas);
    infoContainer.appendChild(descripcion);
    info.appendChild(infoContainer);

    // Precio
    const precioBox = document.createElement("div");
    precioBox.className = "juego-precio-box";

    if (descuento > 0) {
      const descuentoDiv = document.createElement("div");
      descuentoDiv.className = "juego-descuento";
      descuentoDiv.textContent = "-" + descuento + "%";

      const precioOriginal = document.createElement("div");
      precioOriginal.className = "juego-precio-original";
      precioOriginal.textContent = "S/. " + juego.precio.toFixed(2);

      const precioFinalDiv = document.createElement("div");
      precioFinalDiv.className = "juego-precio-final";
      precioFinalDiv.textContent = "S/. " + precioFinal.toFixed(2);

      const precios = document.createElement("div");
      precios.className = "juego-precios";
      precios.appendChild(precioOriginal);
      precios.appendChild(precioFinalDiv);

      const contenedorDescuento = document.createElement("div");
      contenedorDescuento.className = "juego-precios-contenedor";
      contenedorDescuento.appendChild(descuentoDiv);
      contenedorDescuento.appendChild(precios);

      precioBox.appendChild(contenedorDescuento);
    } else {
      const precioSimple = document.createElement("div");
      precioSimple.className = "juego-precio-final sin-descuento";
      precioSimple.textContent = "S/. " + precioFinal.toFixed(2);
      precioBox.appendChild(precioSimple);
    }

    const fecha = document.createElement("div");
    fecha.className = "juego-fecha";
    fecha.textContent = formatearFecha(juego.fecha);

    precioBox.appendChild(fecha);
    info.appendChild(precioBox);
    divJuego.appendChild(info);
    contenedor.appendChild(divJuego);
  }
}

function obtenerIconosPlataforma(lista) {
  const iconos = {
    windows: '<img src="assets/icons/icon_platform_win_dark.png" class="plataforma-icon">',
    macos: '<img src="assets/icons/logotipo-de-mac-os.png" class="plataforma-icon">',
    xbox: '<img src="assets/icons/logotipo-de-xbox.png" class="plataforma-icon">',
    playstation: '<img src="assets/icons/logotipo-de-playstation.png" class="plataforma-icon">',
    nintendo: '<img src="assets/icons/nintendo-switch.png" class="plataforma-icon">'
  };

  return lista.map(nombre => {
    return iconos[nombre] ? `<span class="icono-plataforma" title="${nombre}">${iconos[nombre]}</span>` : "";
  }).join("");
}

function formatearFecha(textoFecha) {
  const fecha = new Date(textoFecha);
  const opciones = { day: "2-digit", month: "short", year: "numeric" };
  return fecha.toLocaleDateString("es-PE", opciones).toUpperCase();
}
