const usuario = JSON.parse(localStorage.getItem("usuario"));
const nav = document.getElementById("usuarioNav");

if (nav) {
  nav.innerHTML = "";

  if (usuario) {
    // Si es admin, muestra el link al dashboard
    if (usuario.rol === "admin") {
      const linkDashboard = document.createElement("a");
      linkDashboard.href = "/admin/dashboard.html";
      linkDashboard.textContent = "Dashboard";
      nav.appendChild(linkDashboard);
      nav.appendChild(document.createTextNode(" | "));
    }

    // Muestra el link de cerrar sesión con nombre
    const linkCerrar = document.createElement("a");
    linkCerrar.href = "#";
    linkCerrar.textContent = `Cerrar sesión (${usuario.username})`;
    linkCerrar.onclick = cerrarSesion;
    nav.appendChild(linkCerrar);
  } else {
    // Si no hay sesión, muestra el login
    const linkLogin = document.createElement("a");
    linkLogin.href = "login.html";
    linkLogin.textContent = "Iniciar sesión";
    nav.appendChild(linkLogin);
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  window.location.href = "login.html";
}
