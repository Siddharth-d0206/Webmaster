document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const navLinks = document.getElementById('nav-links');

    toggleButton.addEventListener('click', () => {
        if (navLinks.style.display === 'flex' || navLinks.style.display === '') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });
});
``
