
document.addEventListener('DOMContentLoaded', () => {
    const form        = document.getElementById('reset-form');
    const emailInput  = form.querySelector('#email');
    const newPassInput= form.querySelector('#new-password');
    const confirmInput= form.querySelector('#confirm-password');
  
    
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
      // ≥8 chars, al menos 1 mayúscula, 1 minúscula, 1 dígito
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(pass);
    }
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;
  
      // email
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
  
      // nueva contraseña
      const newPassVal = newPassInput.value;
      if (!newPassVal) {
        valid = false;
        showError(newPassInput, 'Password is required.');
      } else if (!isValidPassword(newPassVal)) {
        valid = false;
        showError(newPassInput, 'Must be ≥8 chars, with upper, lower & number.');
      } else {
        clearError(newPassInput);
      }
  
      // confirmar contraseña
      if (confirmInput.value !== newPassVal) {
        valid = false;
        showError(confirmInput, 'Passwords do not match.');
      } else {
        clearError(confirmInput);
      }
  
      if (valid) {
        alert('Your password has been reset successfully!');
        form.reset();
        // window.location.href = 'login.html';
      }
    });
  });
  