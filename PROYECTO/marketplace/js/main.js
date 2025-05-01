document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.href === window.location.href) {
      link.style.textDecoration = 'underline';
    }
  });  

  document.addEventListener("DOMContentLoaded", () => {
    const linkSesion = document.getElementById("link-sesion");
    if (!linkSesion) return;
  
    const sesionActiva = localStorage.getItem("sesionActiva");
    const usuario = JSON.parse(localStorage.getItem("usuario"));
  
    if (sesionActiva === "true" && usuario) {
      // Crea menú desplegable
      linkSesion.innerHTML = `
        <div class="menu-usuario">
          <span>👤 ${usuario.nombre.split(" ")[0]}</span>
          <div class="submenu">
            <a href="configuracion.html">Mi cuenta</a>
            <a href="#" id="cerrar-sesion">Cerrar sesión</a>
          </div>
        </div>
      `;
  
      document.getElementById("cerrar-sesion").addEventListener("click", () => {
        localStorage.removeItem("sesionActiva");
        window.location.reload();
      });
    }
  });
  
  function cargarNoticias() {
    const noticiasDiv = document.getElementById("noticias-container");
  
    fetch(`https://newsapi.org/v2/everything?q=videojuegos&language=es&sortBy=publishedAt&pageSize=3&apiKey=${API_KEY_NEWS}`)
      .then(res => res.json())
      .then(data => {
        if (data.articles && data.articles.length > 0) {
          noticiasDiv.innerHTML = "";
          data.articles.forEach(noticia => {
            const div = document.createElement("div");
            div.classList.add("noticia");
            div.innerHTML = `
              <strong>${noticia.title}</strong>
              <p>${noticia.description || "Sin descripción disponible"}</p>
              <a href="${noticia.url}" target="_blank">Leer más</a>
            `;
            noticiasDiv.appendChild(div);
          });
        } else {
          noticiasDiv.innerHTML = "<p>No se encontraron noticias.</p>";
        }
      })
      .catch(err => {
        noticiasDiv.innerHTML = "<p>Error al cargar noticias.</p>";
        console.error("Error cargando noticias:", err);
      });
  }

  function cargarNoticiasAdmin() {
    const contenedor = document.getElementById("noticias-admin");
    const noticias = JSON.parse(localStorage.getItem("noticias")) || [];
  
    if (noticias.length === 0) {
      contenedor.innerHTML = "<p>No hay noticias internas aún.</p>";
      return;
    }
  
    contenedor.innerHTML = "";
    noticias.forEach(n => {
      const div = document.createElement("div");
      div.classList.add("noticia");
      div.innerHTML = `
        <strong>${n.titulo}</strong>
        <p>${n.descripcion}</p>
        <a href="${n.url}" target="_blank">Leer más</a>
        <hr>
      `;
      contenedor.appendChild(div);
    });
  }  

  document.addEventListener("DOMContentLoaded", () => {
    cargarNoticias();
    cargarNoticiasAdmin();
    renderizarSeccion("ultimos-juegos", juego => true);
    renderizarSeccion("mas-vendidos", juego => juego.vendidos);
  });
  