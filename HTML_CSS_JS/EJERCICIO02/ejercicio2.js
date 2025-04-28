let crearTarjeta = function() {
    if (productosDisponibles.length === 0) {
        productosDisponibles = [...productos];
    }

    let indice = Math.floor(Math.random() * productosDisponibles.length);
    let producto = productosDisponibles[indice];
    productosDisponibles.splice(indice, 1);

    // 1. Crear el div.card
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "18rem";

    // 2. Agregar la imagen
    let img = document.createElement("img");
    img.src = producto.imagen;
    img.className = "card-img-top img-card";
    img.alt = producto.nombre;
    card.appendChild(img);

    // 3. Crear el body de la tarjeta
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // 4. Crear el título del producto
    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = producto.nombre;

    // 5. Crear la descripción
    let cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = producto.descripcion;

    // 6. Crear el precio
    let cardPrice = document.createElement("p");
    cardPrice.className = "card-text fw-bold";
    cardPrice.innerText = producto.precio;

    // 7. Armar la tarjeta
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardPrice);
    card.appendChild(cardBody);

    // 8. Agregar la tarjeta al contenedor
    let contenedor = document.getElementById("contenedorTarjetas");
    contenedor.appendChild(card);
}

let productos = [
    {
        nombre: "Auriculares Bluetooth",
        descripcion: "Sonido envolvente y batería de larga duración.",
        precio: "$59.99",
        imagen: "https://m.media-amazon.com/images/I/61fxPWFu6aL._AC_SL500_.jpg"
    },
    {
        nombre: "Smartwatch Deportivo",
        descripcion: "Monitorea tu actividad física y notificaciones.",
        precio: "$99.99",
        imagen: "https://i.blogs.es/9f86b1/1366_2000/450_1000.png"
    },
    {
        nombre: "Teclado Mecánico RGB",
        descripcion: "Teclas resistentes y retroiluminación personalizable.",
        precio: "$79.99",
        imagen: "https://promart.vteximg.com.br/arquivos/ids/7479097-444-444/image-9af968446b50480fade90869c612e40f.jpg?v=638305829355370000"
    }
];

let productosDisponibles = [...productos];

//BONUS: Que no se repitan productos hasta que estén todos

let main = function() {
    let btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", crearTarjeta); 
}

main();