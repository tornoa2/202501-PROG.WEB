function mostrarMensaje(texto) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.display = "block";

  setTimeout(() => {
    mensaje.style.display = "none";
  }, 3000);
}

const formularioRegistro = document.getElementById("registro");
formularioRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const usuario = document.getElementById("registro-user").value.toLowerCase();
  const correo = document.getElementById("registro-email").value.toLowerCase();
  const pass = document.getElementById("registro-pass").value;

  const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuariosRegistrados = listaUsuarios.find((user) => user.correo === correo);
  
  if (usuariosRegistrados) {
    mostrarMensaje("Correo ya registrado");
    return;
  }

  const nuevoUsuario = {
    username: usuario,
    correo: correo,
    pass: pass,
    rol: "user"
  };

  listaUsuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
  mostrarMensaje("Registro exitoso");
  document.getElementById("registro-user").value = "";
  document.getElementById("registro-email").value = "";
  document.getElementById("registro-pass").value = "";

});
