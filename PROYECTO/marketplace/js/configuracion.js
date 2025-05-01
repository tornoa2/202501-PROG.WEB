function mostrarMensaje(texto, tipo = "exito") {
    const div = document.getElementById("mensaje");
    div.textContent = texto;
    div.className = `mensaje ${tipo}`;
    setTimeout(() => {
      div.className = "mensaje oculto";
    }, 3000);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const sesion = localStorage.getItem("sesionActiva");
  
    if (!usuario || sesion !== "true") {
      window.location.href = "login.html";
      return;
    }
  
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("correo").value = usuario.correo;
    document.getElementById("clave").value = usuario.clave;
  
    document.getElementById("config-form").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nuevoUsuario = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        clave: document.getElementById("clave").value
      };
  
      localStorage.setItem("usuario", JSON.stringify(nuevoUsuario));
      mostrarMensaje("✅ Cambios guardados correctamente");
    });
  });
  