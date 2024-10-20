function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.toDateString();
}

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

function getCurrentTime() {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString();
}