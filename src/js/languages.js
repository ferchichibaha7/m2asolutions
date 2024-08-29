document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('countries');

    selectElement.addEventListener('change', (event) => {
        console.log(event.target.value);
    });
});