function mostrarMensaje(texto, tipo = "exito") {
  const div = document.getElementById("mensaje");
  div.textContent = texto;
  div.className = `mensaje ${tipo}`;
  setTimeout(() => {
    div.className = "mensaje oculto";
  }, 3000);
}
  
// REGISTRO
document.getElementById("registro-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements[0].value.trim().toLowerCase();
  const correo = this.elements[1].value.trim().toLowerCase();
  const clave = this.elements[2].value;

  const nuevoUsuario = {
    username,
    correo,
    clave,
    rol: "user"
  };

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar que no exista el mismo username o correo
  const existente = usuarios.find(u => u.username === username || u.correo === correo);
  if (existente) {
    mostrarMensaje("❌ Usuario o correo ya registrado", "error");
    return;
  }

  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarMensaje("✅ Registro exitoso. Ahora puedes iniciar sesión.");
  this.reset();
});
  
// LOGIN
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const loginInput = this.elements[0].value.trim().toLowerCase();
  const clave = this.elements[1].value;

  // Admin hardcoded
  if (loginInput === "admin" && clave === "admin123") {
    const adminUser = {
      username: "admin",
      correo: "admin",
      rol: "admin"
    };
    localStorage.setItem("usuario", JSON.stringify(adminUser));
    localStorage.setItem("sesionActiva", "true");
    window.location.href = "admin/dashboard.html";
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const user = usuarios.find(u =>
    (u.username === loginInput || u.correo === loginInput) && u.clave === clave
  );

  if (user) {
    localStorage.setItem("usuario", JSON.stringify(user));
    localStorage.setItem("sesionActiva", "true");
    window.location.href = "index.html";
  } else {
    mostrarMensaje("❌ Usuario o contraseña incorrectos", "error");
  }
});