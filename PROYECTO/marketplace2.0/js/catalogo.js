const usuario = JSON.parse(localStorage.getItem("usuario"));
const nav = document.getElementById("usuarioNav");

if (usuario) {
  nav.innerHTML = `
    ${usuario.rol === "admin" ? '<a href="admin/dashboard.html">Dashboard</a> | ' : ''}
    <a href="#" onclick="cerrarSesion()">Cerrar sesión (${usuario.username})</a>
  `;
} else {
  nav.innerHTML = `<a href="login.html">Iniciar sesión</a>`;
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  localStorage.removeItem("sesionActiva");
  window.location.href = "index.html";
  window.location.reload();
}

const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
const contenedor = document.getElementById("catalogo");

if (juegos.length === 0) {
  const vacio = document.createElement("p");
  vacio.textContent = "Aún no hay juegos disponibles.";
  contenedor.appendChild(vacio);
}

juegos.forEach(juego => {
  const precioFinal = juego.precio * (1 - (juego.descuento || 0) / 100);
  const item = document.createElement("div");
  item.className = "juego-item";

  item.innerHTML = `
    <img class="juego-img" src="assets/img/${juego.carpeta}/header.png"
         alt="${juego.nombre}" onerror="this.src='assets/img/placeholder.jpg'">

    <div class="juego-item-body">
      <div class="juego-info">
        <h3>${juego.nombre}</h3>
        <div class="juego-plataformas">
          ${obtenerIconosPlataforma(juego.plataformas || [])}
        </div>
        <p class="juego-descripcion">${juego.categoria}</p>
      </div>

      <div class="juego-precio-box">
        ${juego.descuento > 0 ? `
          <div class="juego-precios-contenedor">
            <div class="juego-descuento">-${juego.descuento}%</div>
            <div class="juego-precios">
              <div class="juego-precio-original">S/. ${juego.precio.toFixed(2)}</div>
              <div class="juego-precio-final">S/. ${precioFinal.toFixed(2)}</div>
            </div>
          </div>
        ` : `
          <div class="juego-precio-final sin-descuento">S/. ${precioFinal.toFixed(2)}</div>
        `}
        <div class="juego-fecha">${formatearFecha(juego.fecha)}</div>
      </div>
    </div>
  `;

  contenedor.appendChild(item);
});

function obtenerIconosPlataforma(lista) {
  const iconos = {
    windows: '<img src="assets/icons/icon_platform_win_dark.png" class="plataforma-icon">',
    macos: '<img src="assets/icons/logotipo-de-mac-os.png" class="plataforma-icon">',
    xbox: '<img src="assets/icons/logotipo-de-xbox.png" class="plataforma-icon">',
    playstation: '<img src="assets/icons/logotipo-de-playstation.png" class="plataforma-icon">',
    nintendo: '<img src="assets/icons/nintendo-switch.png" class="plataforma-icon">',
  };
  return lista.map(p => `<span class="icono-plataforma" title="${p}">${iconos[p]}</span>`).join(" ");
}


function formatearFecha(fechaStr) {
  const fecha = new Date(fechaStr);
  const opciones = { day: "2-digit", month: "short", year: "numeric" };
  return fecha.toLocaleDateString("es-PE", opciones).toUpperCase();
}
