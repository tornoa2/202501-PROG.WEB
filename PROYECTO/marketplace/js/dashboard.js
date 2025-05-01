document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("resumen-admin");
  
    const juegos = JSON.parse(localStorage.getItem("juegosAdmin")) || [];
    const noticias = JSON.parse(localStorage.getItem("noticias")) || [];
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const ingresos = (juegos.length * 49.99).toFixed(2); // Simulado
  
    const tarjetas = [
      { titulo: "🎮 Juegos", valor: juegos.length },
      { titulo: "📰 Noticias", valor: noticias.length },
      { titulo: "👤 Usuario Actual", valor: usuario ? usuario.username : "Ninguno" },
      { titulo: "💰 Ganancias Simuladas", valor: `$${ingresos}` }
    ];
  
    tarjetas.forEach(t => {
      const div = document.createElement("div");
      div.className = "tarjeta";
      div.innerHTML = `
        <div>${t.titulo}</div>
        <span>${t.valor}</span>
      `;
      contenedor.appendChild(div);
    });
  });
  