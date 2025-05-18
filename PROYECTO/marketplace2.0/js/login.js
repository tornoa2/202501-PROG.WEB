function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.display = "block";
}

const formularioLogin = document.getElementById("login");
formularioLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("login-user").value.toLowerCase();
  const pass = document.getElementById("login-pass").value;

  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuariosRegistrados = listaUsuarios.find((u) => u.username === user && u.pass === pass);

  if (!usuariosRegistrados) {
    if (user === "admin" && pass === "admin123") {
      localStorage.setItem("usuario", JSON.stringify({ username: "admin", rol: "admin" }));
      window.location.href = "admin/dashboard.html";
      return;
  }

    mostrarMensaje("Usuario o contraseña incorrectos");
    return;
  }

  localStorage.setItem("usuario", JSON.stringify(usuariosRegistrados));
  window.location.href = "index.html";
});