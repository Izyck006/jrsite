document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const regno = document.getElementById('regno').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Create user object
    const user = {
      fullname,
      regno,
      email,
      username,
      password
    };

    // Get existing users from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user
    users.push(user);

    // Save back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! You can now login.');
    form.reset();
    window.location.href = 'login.html';
  });
});