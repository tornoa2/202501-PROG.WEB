// js/carrito.js

function cargarCarrito() {
    const lista = document.getElementById("carrito-lista");
    const resumen = document.getElementById("resumen-carrito");
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    if (carrito.length === 0) {
      lista.innerHTML = "<p>No hay juegos en el carrito.</p>";
      resumen.innerHTML = "";
      return;
    }
  
    lista.innerHTML = "";
    let total = 0;
  
    carrito.forEach((juego, index) => {
      total += juego.precio;
      const item = document.createElement("div");
      item.classList.add("juego-card");
      item.innerHTML = `
        <h3>${juego.nombre}</h3>
        <p>${juego.plataforma} - $${juego.precio}</p>
        <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
      `;
      lista.appendChild(item);
    });
  
    resumen.innerHTML = `
      <h3>Total: $${total.toFixed(2)}</h3>
      <button onclick="finalizarCompra()">Finalizar compra</button>
    `;
  }
  
  function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
  }
  
  function finalizarCompra() {
    alert("🎉 Compra realizada con éxito.\nTus claves han sido enviadas por correo (simulado).");
    localStorage.removeItem("carrito");
    cargarCarrito();
  }
  
  document.addEventListener("DOMContentLoaded", cargarCarrito);
  
