document.addEventListener("DOMContentLoaded", () => {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const tabla = document.querySelector("#tabla-usuarios tbody");
    const total = document.getElementById("total-usuarios");
  
    total.textContent = `Total de usuarios: ${usuarios.length}`;
  
    usuarios.forEach(user => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${user.username}</td>
        <td>${user.correo}</td>
        <td>${user.rol}</td>
      `;
      tabla.appendChild(fila);
    });
  });
  