/* ======== MOBILE NAVIGATION MENU ======== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

// Function to show the menu
const showMenu = () => {
    navMenu.classList.add('nav-active');
    navToggle.innerHTML = '<i class="fas fa-times"></i>'; // Change icon to 'X'
};

// Function to hide the menu
const hideMenu = () => {
    navMenu.classList.remove('nav-active');
    navToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Change icon to 'bars'
};

// Toggle menu on click
navToggle.addEventListener('click', () => {
    if (navMenu.classList.contains('nav-active')) {
        hideMenu();
    } else {
        showMenu();
    }
});

// Hide menu when a nav link is clicked (for single-page-app feel)
navLinks.forEach(link => {
    link.addEventListener('click', hideMenu);
});

// Add a shadow to header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


/* ======== NEW: SCROLL ANIMATIONS ======== */
// This is the Intersection Observer API

const observerOptions = {
    root: null, // observes in relation to the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the element must be visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        // When the element is in view
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
};

// Create the observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Select all elements with the .animate-on-scroll class
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Observe each element
elementsToAnimate.forEach(el => {
    observer.observe(el);
});