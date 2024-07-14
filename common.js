
// common.js
document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.getElementById('common-header');
    fetch('head.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading common header:', error));
});
