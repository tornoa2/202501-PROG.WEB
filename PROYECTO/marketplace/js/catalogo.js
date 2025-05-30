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
      imagen: "assets/img/Cyberpunk_2077/header.png"
    },
    {
      id: 2,
      nombre: "Red Dead Redemption 2",
      categoria: "Deportes",
      plataforma: "PC",
      precio: 69.99,
      vendidos: true,
      valorado: false,
      imagen: "assets/img/Red_Dead_Redemption_2/header.png"
    },
    {
      id: 3,
      nombre: "The Legend of Zelda: Tears of the Kingdom",
      categoria: "Aventura",
      plataforma: "Switch",
      precio: 59.99,
      vendidos: false,
      valorado: true,
      imagen: "assets/img/The_Legend_of_Zelda_Tears/share-fb.png"
    },
    {
      id: 4,
      nombre: "Red Dead Redemption",
      categoria: "Aventura",
      plataforma: "PC",
      precio: 59.99,
      vendidos: false,
      valorado: true,
      imagen: "assets/img/Red_Dead_Redemption/header.png"
    },
    {
      id: 5,
      nombre: "Days Gone",
      categoria: "Aventura",
      plataforma: "PC",
      precio: 59.99,
      vendidos: false,
      valorado: true,
      imagen: "assets/img/Days_Gone/header.png"
    },
    {
      id: 5,
      nombre: "Death Stranding",
      categoria: "Aventura",
      plataforma: "PC",
      precio: 59.99,
      vendidos: false,
      valorado: true,
      imagen: "assets/img/Death_Stranding/header.png"
    }
  ];
  
  function mostrarCatalogo(lista) {
    const contenedor = document.getElementById("juegos-container");
    contenedor.innerHTML = "";
  
    lista.forEach(juego => {
      const card = document.createElement("div");
      card.classList.add("juego-card");
  
      card.innerHTML = `
        <div class="img-container">
          <img src="${juego.imagen}" alt="${juego.nombre}">
        </div>
        <h3>${juego.nombre}</h3>
        <p>Plataforma: ${juego.plataforma}</p>
        <p>Categoría: ${juego.categoria}</p>
        <p>Precio: $${juego.precio}</p>
        <a href="detalle.html?id=${juego.id}">
          <button>Ver más</button>
        </a>
      `;
  
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
  
