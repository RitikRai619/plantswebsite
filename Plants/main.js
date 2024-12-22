// ~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]'); // Toggle the menu visibility
    hamburger.classList.toggle('ri-close-large-line'); // Change the icon to a "close" icon
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('left-[0]'); // Close the menu when a link is clicked
        hamburger.classList.toggle('ri-close-large-line'); // Change the icon back to the hamburger icon
    });
});