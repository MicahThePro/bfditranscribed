function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toDateString();
}

function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString();
}

window.addEventListener('scroll', function() {
    var iframe = document.querySelector('.video-iframe');
    var highlight = this.document.querySelector('.highlight');
    if (window.scrollY > 100) { // Adjust the scroll value as needed
        iframe.classList.add('shrink');
        highlight.classList.add('shrink');
    } else {
        iframe.classList.remove('shrink');
        highlight.classList.remove('shrink');
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const updateDateTime = () => {
            dateElement.textContent = `${getCurrentDate()} ${getCurrentTime()}`;
        };
        updateDateTime();
        setInterval(updateDateTime, 1000);
    }
});




