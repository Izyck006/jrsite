document.addEventListener('DOMContentLoaded', () => {
    const calendarImageDisplay = document.getElementById('calendar-image-display');
    const noCalendarImageMessage = document.getElementById('no-calendar-image-message');

    // Function to load and display the saved calendar image
    function loadAndDisplayCalendarImage() {
        const savedImage = localStorage.getItem('uploadedCalendarImage');
        if (savedImage) {
            calendarImageDisplay.src = savedImage;
            calendarImageDisplay.style.display = 'block';
            noCalendarImageMessage.style.display = 'none';
        } else {
            calendarImageDisplay.src = '';
            calendarImageDisplay.style.display = 'none';
            noCalendarImageMessage.style.display = 'block';
        }
    }

    // Initial load of the calendar image when the page loads
    loadAndDisplayCalendarImage();
});