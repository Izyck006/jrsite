
document.addEventListener('DOMContentLoaded', function() {

    // Sidebar menu active state functionality
    const navLinks = document.querySelectorAll('nav a');
    const currentLocation = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('bg-gray-700', 'rounded-l-lg');
        }
    });

    // Function to load lecture slides from localStorage
    function loadLectureSlides() {
        const slides = localStorage.getItem('lectureSlides');
        return slides ? JSON.parse(slides) : [];
    }

    // Function to render lecture slides
    function renderLectureSlides() {
        const slidesListDiv = document.getElementById('slides-list');
        if (!slidesListDiv) return;

        slidesListDiv.innerHTML = ''; // Clear existing content

        const lectureSlides = loadLectureSlides(); // Load actual slides

        if (lectureSlides.length === 0) {
            slidesListDiv.innerHTML = '<div class="bg-white p-6 rounded-lg shadow-md"><p class="text-gray-600">No lecture slides available yet.</p></div>';
            return;
        }

        lectureSlides.forEach(slide => {
            const slideCard = document.createElement('div');
            slideCard.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');
            slideCard.innerHTML = `
                <h3 class="text-xl font-semibold mb-2">${slide.title}</h3>
                <p class="text-gray-600">${slide.description || ''}</p> <!-- Description might be empty -->
                <a href="${slide.fileUrl}" download="${slide.fileName}" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Download</a>
            `;
            slidesListDiv.appendChild(slideCard);
        });
    }

    // NoteSlide section visibility toggle
    const noteslideNavLink = document.getElementById('noteslide-nav-link');
    const noteslideSection = document.getElementById('noteslide-section');
    const welcomeSection = document.querySelector('main > h1').parentNode; // Assuming welcome message is direct child of main

    if (noteslideNavLink && noteslideSection && welcomeSection) {
        noteslideNavLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Toggle visibility of noteslide section
            noteslideSection.classList.toggle('hidden');

            // Hide welcome section if noteslide is visible, show if noteslide is hidden
            if (!noteslideSection.classList.contains('hidden')) {
                welcomeSection.classList.add('hidden');
                renderLectureSlides(); // Render slides when section is shown
            } else {
                welcomeSection.classList.remove('hidden');
            }

            // Optional: Remove active state from other links and add to noteslide link
            navLinks.forEach(link => {
                link.classList.remove('bg-gray-700', 'rounded-l-lg');
            });
            noteslideNavLink.classList.add('bg-gray-700', 'rounded-l-lg');
        });
    }
});
