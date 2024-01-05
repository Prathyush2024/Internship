function validateForm(event) {
  event.preventDefault(); 

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();

  var errors = [];
  if (name === '') {
    errors.push('Name is required.');
  }
  if (email === '') {
    errors.push('Email is required.');
  }
  if (password === '') {
    errors.push('Password is required.');
  } else if (password.length < 6) {
    errors.push('Password should be at least 6 characters long.');
  }

  var errorDiv = document.getElementById('errorMessages');
  if (errors.length > 0) {
    errorDiv.innerHTML = '<ul>' + errors.map(error => `<li>${error}</li>`).join('') + '</ul>';
  } else {
    errorDiv.innerHTML = ''; 
    alert('Form submitted successfully!'); 
    document.getElementById('myForm').reset();
  }
}
