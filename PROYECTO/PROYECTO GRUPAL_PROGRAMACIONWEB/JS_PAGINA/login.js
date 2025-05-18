
document.addEventListener('DOMContentLoaded', () => {
    // Usuario administrador
    const adminUser = {
      username: 'admin@123.com',
      password: '123'
    };
  
    // Capturamos el formulario
    const form = document.querySelector('.login-card form');
    const errorMsg = document.createElement('div');
    errorMsg.style.color = 'salmon';
    errorMsg.style.textAlign = 'center';
    errorMsg.style.marginTop = '12px';
    form.appendChild(errorMsg);
  
    form.addEventListener('submit', e => {
      e.preventDefault(); // parar envío automático
  
      const enteredUser = document.getElementById('email').value.trim();
      const enteredPass = document.getElementById('password').value;
  
      if (enteredUser === adminUser.username && enteredPass === adminUser.password) {
        alert('¡Bienvenido, admin!');
        // window.location.href = '/dashboard.html';
      } else {
        errorMsg.textContent = 'Usuario o contraseña inválidos.';
      }
    });
  });
  