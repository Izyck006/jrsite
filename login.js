document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check for matching user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      alert('Login successful!');
      // Redirect to dashboard or homepage
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid credentials. Please signup if you do not have an account.');
      window.location.href = 'signup.html';
    }
  });
});


