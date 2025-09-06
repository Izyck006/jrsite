// Script for NoteSlide functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log('NoteSlide page loaded.');

    const uploadForm = document.getElementById('upload-form');
    const slidesListDiv = document.getElementById('slides-list'); // Assuming an element to display uploaded slides

    // Function to load slides from localStorage
    function loadSlides() {
        const slides = localStorage.getItem('lectureSlides');
        return slides ? JSON.parse(slides) : [];
    }

    // Function to save slides to localStorage
    function saveSlides(slides) {
        localStorage.setItem('lectureSlides', JSON.stringify(slides));
    }

    // Function to render uploaded slides on the admin page
    function renderAdminSlides() {
        const slides = loadSlides();
        if (slidesListDiv) {
            slidesListDiv.innerHTML = ''; // Clear existing content
            if (slides.length === 0) {
                slidesListDiv.innerHTML = '<p>No lecture slides uploaded yet.</p>';
            } else {
                slides.forEach(slide => {
                    const slideItem = document.createElement('div');
                    slideItem.classList.add('uploaded-slide-item'); // Add a class for styling
                    slideItem.innerHTML = `
                        <h4>${slide.title}</h4>
                        <p><a href="${slide.fileDataUrl}" target="_blank" download="${slide.fileName}">Download (Admin View)</a></p>
                        <button class="delete-slide-btn" data-id="${slide.id}">Delete</button>
                    `;
                    slidesListDiv.appendChild(slideItem);
                });

                // Add event listeners for delete buttons
                document.querySelectorAll('.delete-slide-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        const slideIdToDelete = e.target.dataset.id;
                        let currentSlides = loadSlides();
                        currentSlides = currentSlides.filter(slide => slide.id !== slideIdToDelete);
                        saveSlides(currentSlides);
                        renderAdminSlides();
                    });
                });
            }
        }
    }

    if (uploadForm) {
        uploadForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const slideTitle = document.getElementById('slide-title').value;
            const slideFile = document.getElementById('slide-file').files[0];

            if (!slideTitle || !slideFile) {
                alert('Please fill in all fields and select a file.');
                return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const fileDataUrl = e.target.result;

                const newSlide = {
                    id: Date.now().toString(), // Simple unique ID
                    title: slideTitle,
                    fileDataUrl: fileDataUrl, // Store the Data URL
                    fileName: slideFile.name // Store original file name
                };

                const currentSlides = loadSlides();
                currentSlides.push(newSlide);
                saveSlides(currentSlides);

                alert('Lecture slide uploaded successfully!');
                uploadForm.reset(); // Clear the form
                renderAdminSlides(); // Re-render the list of slides
            };
            reader.readAsDataURL(slideFile);
        });
    }

    // Initial render of slides when the page loads
    renderAdminSlides();
});
