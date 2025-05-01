// js/detalle.js

function obtenerIdDesdeURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("id"));
  }

  function mostrarDetalle(juego) {
    const contenedor = document.getElementById("detalle-juego");
  
    contenedor.innerHTML = `
      <h2>${juego.nombre}</h2>
      <img src="${juego.imagen}" alt="${juego.nombre}" style="max-width: 300px; border-radius: 8px;">
      <p><strong>Plataforma:</strong> ${juego.plataforma}</p>
      <p><strong>Categoría:</strong> ${juego.categoria}</p>
      <p><strong>Precio:</strong> $${juego.precio}</p>
      <p><strong>Reseñas:</strong> ⭐⭐⭐⭐☆</p>
      <p><strong>Descripción:</strong> Lorem ipsum dolor sit amet.</p>
      <button id="agregar-carrito">Agregar al carrito</button>
    `;
  
    document.getElementById("agregar-carrito").addEventListener("click", () => {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(juego);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert("✅ Juego agregado al carrito");
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const id = obtenerIdDesdeURL();
    const juego = juegos.find(j => j.id === id);
  
    if (juego) {
      mostrarDetalle(juego);
    } else {
      document.getElementById("detalle-juego").innerHTML = "<p>Juego no encontrado.</p>";
    }
  });
  