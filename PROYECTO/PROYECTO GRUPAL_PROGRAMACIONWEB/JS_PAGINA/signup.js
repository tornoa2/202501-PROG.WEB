
document.addEventListener('DOMContentLoaded', () => {
    const form      = document.getElementById('signup-form');
    const nameInput = form.querySelector('#name');
    const emailInput= form.querySelector('#email');
    const passInput = form.querySelector('#password');
  

    function showError(input, msg) {
      input.parentElement.querySelector('.error').textContent = msg;
    }
    function clearError(input) {
      input.parentElement.querySelector('.error').textContent = '';
    }
    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function isValidPassword(pass) {
      // Mínimo 8 caracteres, una mayúscula, una minúscula y un dígito
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass);
    }
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
  
      // Valida nombre
      if (!nameInput.value.trim()) {
        valid = false;
        showError(nameInput, 'Name is required.');
      } else {
        clearError(nameInput);
      }
  
      // Valida email
      const emailVal = emailInput.value.trim();
      if (!emailVal) {
        valid = false;
        showError(emailInput, 'Email is required.');
      } else if (!isValidEmail(emailVal)) {
        valid = false;
        showError(emailInput, 'Enter a valid email.');
      } else {
        clearError(emailInput);
      }
  
      // Valida contraseña
      const passVal = passInput.value;
      if (!passVal) {
        valid = false;
        showError(passInput, 'Password is required.');
      } else if (!isValidPassword(passVal)) {
        valid = false;
        showError(passInput, 'Debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas y un número.');
      } else {
        clearError(passInput);
      }
  
      if (valid) {
        alert('Account created successfully!');
        form.reset();
        //redirigir, p.ej. window.location = '/login.html';
      }
    });
  });
  