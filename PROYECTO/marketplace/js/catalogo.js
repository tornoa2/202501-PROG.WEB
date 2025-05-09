// js/catalogo.js

const juegos = [
    {
      id: 1,
      nombre: "Cyberpunk 2077",
      categoria: "RPG",
      plataforma: "PC",
      precio: 59.99,
      vendidos: true,
      valorado: true,
      imagen: "assets/img/cyberpunk.jpg"
    },
    {
      id: 2,
      nombre: "FIFA 24",
      categoria: "Deportes",
      plataforma: "PS5",
      precio: 69.99,
      vendidos: true,
      valorado: false,
      imagen: "assets/img/fifa24.jpg"
    },
    {
      id: 3,
      nombre: "Zelda: Tears of the Kingdom",
      categoria: "Aventura",
      plataforma: "Switch",
      precio: 59.99,
      vendidos: false,
      valorado: true,
      imagen: "assets/img/zelda.jpg"
    }
  ];
  
  function mostrarCatalogo(lista) {
    const contenedor = document.getElementById("juegos-container");
    contenedor.innerHTML = "";
  
    lista.forEach(juego => {
      const card = document.createElement("div");
      card.classList.add("juego-card");
  
      card.innerHTML = `
        <img src="${juego.imagen}" alt="${juego.nombre}">
        <h3>${juego.nombre}</h3>
        <p>Plataforma: ${juego.plataforma}</p>
        <p>Categoría: ${juego.categoria}</p>
        <p>Precio: $${juego.precio}</p>
        <a href="detalle.html?id=${juego.id}">
            <button>Ver más</button>
        </a>`;
  
      contenedor.appendChild(card);
    });
  }

  function aplicarFiltros() {
    const categoria = document.getElementById("filtro-categoria").value;
    const plataforma = document.getElementById("filtro-plataforma").value;
  
    const filtrados = juegos.filter(juego => {
      const coincideCategoria = categoria === "todos" || juego.categoria === categoria;
      const coincidePlataforma = plataforma === "todos" || juego.plataforma === plataforma;
      return coincideCategoria && coincidePlataforma;
    });
  
    mostrarCatalogo(filtrados);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    mostrarCatalogo(juegos);
  
    document.getElementById("filtro-categoria").addEventListener("change", aplicarFiltros);
    document.getElementById("filtro-plataforma").addEventListener("change", aplicarFiltros);
  });  
  
  document.addEventListener("DOMContentLoaded", () => {
    mostrarCatalogo(juegos);
  });
  
