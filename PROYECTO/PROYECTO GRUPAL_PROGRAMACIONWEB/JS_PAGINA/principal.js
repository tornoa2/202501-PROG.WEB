document.addEventListener('DOMContentLoaded', () => {
    // Define tus slides con imagen, URL, título y descripción
    const slides = [
      {
        img: 'https://media.vandal.net/i/1280x720/5-2025/14/202551412555382_1.jpg.webp',
        url: 'https://vandal.elespanol.com/noticia/1350780498/kojima-asegura-que-el-parecido-entre-death-stranding-2-y-metal-gear-solid-5-no-es-a-proposito/',
        title: 'Kojima asegura que el parecido entre Death Stranding 2 y Metal Gear Solid 5 no es a proposito.',
        desc: 'No es por imitar a Metal Gear Solid V: Hideo Kojima argumenta que la mayor dosis de acción en Death Stranding 2: On the Beach tiene sentido en la historia y los temas que trata el videojuego.'
      },
      {
        img: 'path/to/slide2.jpg',
        url: '/details/2',
        title: 'Noticia 2',
        desc: 'Un resumen interesante sobre la noticia 2.'
      },
      {
        img: 'path/to/slide3.jpg',
        url: '/details/3',
        title: 'Noticia 3',
        desc: 'Descripción breve de la noticia número 3.'
      }
    ];
  
    let current = 0;
    const imgEl       = document.querySelector('.carousel-img');
    const titleEl     = document.querySelector('.carousel-title');
    const descEl      = document.querySelector('.carousel-desc');
    const detailsBtn  = document.querySelector('.details-btn');
    const prevBtn     = document.querySelector('.carousel-btn.prev');
    const nextBtn     = document.querySelector('.carousel-btn.next');
  
    function updateCarousel() {
      const slide = slides[current];
      imgEl.src          = slide.img;
      titleEl.textContent = slide.title;
      descEl.textContent  = slide.desc;
      detailsBtn.onclick  = () => {
        window.location.href = slide.url;
      };
    }
  
    prevBtn.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      updateCarousel();
    });
  
    // Inicializar el carrusel
    updateCarousel();
  });
  