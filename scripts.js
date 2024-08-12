// scripts.js

// Search Functionality
document.getElementById('searchInput').addEventListener('input', function() {
    let filter = this.value.toUpperCase();
    let scamItems = document.querySelectorAll('.scam-item');

    scamItems.forEach(function(item) {
        let title = item.querySelector('h3').textContent;
        if (title.toUpperCase().indexOf(filter) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});
// Highlight Current Page in Navigation
window.addEventListener('load', function() {
    let navLinks = document.querySelectorAll('nav ul li a');
    let currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        event.preventDefault(); // Prevent form submission
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address!");
        event.preventDefault();
    }
});

function validateEmail(email) {
    // Basic email validation regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

