document.addEventListener('DOMContentLoaded', () => {
    const uploadImageForm = document.getElementById('upload-image-form');
    const calendarImageInput = document.getElementById('calendar-image');
    const uploadedCalendarImage = document.getElementById('uploaded-calendar-image');
    const currentImageContainer = document.getElementById('current-calendar-image-container');

    // Function to load and display the saved image
    function loadAndDisplayImage() {
        const savedImage = localStorage.getItem('uploadedCalendarImage');
        if (savedImage) {
            uploadedCalendarImage.src = savedImage;
            uploadedCalendarImage.style.display = 'block';
            currentImageContainer.querySelector('p').style.display = 'none';
        } else {
            uploadedCalendarImage.src = '';
            uploadedCalendarImage.style.display = 'none';
            currentImageContainer.querySelector('p').style.display = 'block';
        }
    }

    // Handle form submission
    if (uploadImageForm) {
        uploadImageForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const file = calendarImageInput.files[0];

            if (file) {
                const reader = new FileReader();

                reader.onload = function(event) {
                    const imageDataUrl = event.target.result;
                    localStorage.setItem('uploadedCalendarImage', imageDataUrl);
                    loadAndDisplayImage();
                    alert('Calendar image uploaded successfully!');
                };

                reader.readAsDataURL(file);
            } else {
                alert('Please select an image file to upload.');
            }
        });
    }

    // Initial load of the image when the page loads
    loadAndDisplayImage();
});
