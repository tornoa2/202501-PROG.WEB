document.addEventListener("DOMContentLoaded", () => {
    const juegos = JSON.parse(localStorage.getItem("juegosAdmin")) || [];
  
    // Simular ingresos por mes según fechas de lanzamiento
    const meses = Array(12).fill(0); // enero a diciembre
    juegos.forEach(j => {
      const mes = new Date(j.fecha).getMonth(); // 0 = enero
      meses[mes] += j.precio || 0;
    });
  
    const ctx = document.getElementById("graficoGanancias").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "Ene", "Feb", "Mar", "Abr", "May", "Jun",
          "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
        ],
        datasets: [{
          label: "Ingresos ($)",
          data: meses,
          backgroundColor: "rgba(0, 123, 255, 0.7)",
          borderColor: "rgba(0, 123, 255, 1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  });
  