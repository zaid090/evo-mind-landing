// Toggle menu and header scroll effect
const header = document.querySelector('.header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Smooth scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Intersect Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            if (entry.target.classList.contains('stats-section')) {
                animateNumbers();
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll, .stats-section').forEach(el => {
    observer.observe(el);
});

// Function to animate numbers
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    numbers.forEach((num) => {
        const target = +num.getAttribute('data-count');
        let count = 0;
        const increment = target / 50;
        const updateCount = () => {
            if (count < target) {
                count += increment;
                num.innerText = Math.ceil(count);
                setTimeout(updateCount, 20);
            } else {
                num.innerText = target + "+";
            }
        };
        updateCount();
    });
}

// Mobile Nav Toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('nav-active');
        navToggle.innerHTML = isActive ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-active');
            navToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}