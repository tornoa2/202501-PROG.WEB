function mostrarMensaje(texto, tipo = "exito") {
  const div = document.getElementById("mensaje");
  div.textContent = texto;
  div.className = `mensaje ${tipo}`;
  setTimeout(() => div.className = "mensaje oculto", 3000);
}

// REGISTRO
document.getElementById("registro-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("reg-usuario").value.trim().toLowerCase();
  const correo = document.getElementById("reg-email").value.trim().toLowerCase();
  const clave = document.getElementById("reg-pass").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.find(u => u.username === username || u.correo === correo)) {
    mostrarMensaje("❌ Usuario o correo ya registrado", "error");
    return;
  }

  usuarios.push({ username, correo, clave, rol: "user" });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarMensaje("✅ Registro exitoso. Ahora puedes iniciar sesión.");
  this.reset();
});

// LOGIN
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const loginInput = document.getElementById("login-user").value.trim().toLowerCase();
  const clave = document.getElementById("login-pass").value;

  // CREDENCIAL ADMIN FIJA
  if (loginInput === "admin" && clave === "admin123") {
    const admin = {
      username: "admin",
      correo: "admin",
      rol: "admin"
    };
    localStorage.setItem("usuario", JSON.stringify(admin));
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
