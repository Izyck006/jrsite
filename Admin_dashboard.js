// Edit button functionality
document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        const userName = row.querySelector('td:first-child').textContent;
        alert('Edit user: ' + userName);
    });
});

// Delete button functionality
document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (confirm('Are you sure you want to delete this user?')) {
            const row = this.closest('tr');
            row.remove();
            alert('User deleted successfully');
        }
    });
});

// Profile dropdown functionality
const profileBtn = document.querySelector('.profile-btn');
const profileDropdown = document.querySelector('.profile-dropdown-content');
if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        profileDropdown.style.display = 
            profileDropdown.style.display === 'block' ? 'none' : 'block';
    });
    document.addEventListener('click', function() {
        profileDropdown.style.display = 'none';
    });
}

// Sidebar menu active state functionality
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.sidebar-menu a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        // Navigation will proceed normally
    });
});

// Hamburger menu toggle for sidebar nav at <=699px
document.addEventListener('DOMContentLoaded', function() {
    const sidebarMenu = document.querySelector('.sidebar-menu');
    const hamburgerBtn = document.getElementById('sidebarHamburger');
    const menuList = sidebarMenu ? sidebarMenu.querySelector('ul') : null;

    function toggleMenu() {
        sidebarMenu.classList.toggle('active');
    }

    function updateHamburgerVisibility() {
        if (window.innerWidth <= 699) {
            if (hamburgerBtn) hamburgerBtn.style.display = 'flex';
            if (menuList) menuList.style.position = 'absolute';
        } else {
            if (hamburgerBtn) hamburgerBtn.style.display = 'none';
            if (sidebarMenu) sidebarMenu.classList.remove('active');
            if (menuList) menuList.style.position = 'static';
        }
    }

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', toggleMenu);
    }
    window.addEventListener('resize', updateHamburgerVisibility);
    updateHamburgerVisibility();
});