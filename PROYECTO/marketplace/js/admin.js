document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-juego");
    const tabla = document.querySelector("#tabla-juegos tbody");
    const idInput = document.getElementById("juego-id");

    form.addEventListener("submit", e => {
      e.preventDefault();
      const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
  
      const nuevoJuego = {
        nombre: form.nombre.value,
        categoria: form.categoria.value,
        plataforma: form.plataforma.value,
        precio: parseFloat(form.precio.value),
        fecha: form.fecha.value
      };
  
      if (idInput.value !== "") {
        juegos[idInput.value] = nuevoJuego;
      } else {
        juegos.push(nuevoJuego);
      }
  
      localStorage.setItem("juegos", JSON.stringify(juegos));
      form.reset();
      idInput.value = "";
      cargarJuegos();
    });
  
    window.editarJuego = index => {
      const juegos = JSON.parse(localStorage.getItem("juegos"));
      const juego = juegos[index];
      form.nombre.value = juego.nombre;
      form.categoria.value = juego.categoria;
      form.plataforma.value = juego.plataforma;
      form.precio.value = juego.precio;
      form.fecha.value = juego.fecha;
      idInput.value = index;
    };
  
    window.eliminarJuego = index => {
      const juegos = JSON.parse(localStorage.getItem("juegos"));
      juegos.splice(index, 1);
      localStorage.setItem("juegos", JSON.stringify(juegos));
      cargarJuegos();
    };
  
    cargarJuegos();

    window.aplicarFiltros = () => {
        const cat = document.getElementById("filtro-categoria").value.toLowerCase();
        const min = parseFloat(document.getElementById("filtro-precio-min").value);
        const max = parseFloat(document.getElementById("filtro-precio-max").value);
        const fecha = document.getElementById("filtro-fecha").value;
      
        const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
      
        const filtrados = juegos.filter(juego => {
          const cumpleCategoria = cat === "" || juego.categoria.toLowerCase().includes(cat);
          const cumpleMin = isNaN(min) || juego.precio >= min;
          const cumpleMax = isNaN(max) || juego.precio <= max;
          const cumpleFecha = fecha === "" || juego.fecha >= fecha;
          return cumpleCategoria && cumpleMin && cumpleMax && cumpleFecha;
        });
      
        renderizarTabla(filtrados);
      };
      
      window.limpiarFiltros = () => {
        document.getElementById("filtro-categoria").value = "";
        document.getElementById("filtro-precio-min").value = "";
        document.getElementById("filtro-precio-max").value = "";
        document.getElementById("filtro-fecha").value = "";
        cargarJuegos();
      };

      function renderizarTabla(juegos) {
        tabla.innerHTML = "";
        juegos.forEach((juego, index) => {
          const fila = document.createElement("tr");
          fila.innerHTML = `
            <td>${juego.nombre}</td>
            <td>${juego.categoria}</td>
            <td>${juego.plataforma}</td>
            <td>$${juego.precio}</td>
            <td>${juego.fecha}</td>
            <td>
              <button onclick="editarJuego(${index})">✏️</button>
              <button onclick="eliminarJuego(${index})">🗑️</button>
            </td>
          `;
          tabla.appendChild(fila);
        });
      }
      
      function cargarJuegos() {
        const juegos = JSON.parse(localStorage.getItem("juegos")) || [];
        renderizarTabla(juegos);
      }      
      
  });
  