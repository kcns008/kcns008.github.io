// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Add active state to navigation
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#0369a1';
        }
    });
});

// Mobile menu toggle
const createMobileMenu = () => {
    const existingToggle = document.querySelector('.menu-toggle');
    if (existingToggle) {
        existingToggle.remove();
    }
    
    if (window.innerWidth <= 480) {
        const navMenu = document.querySelector('.nav-menu');
        const navBrand = document.querySelector('.nav-brand');

        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = `
            cursor: pointer;
            font-size: 1.5rem;
            display: block;
            color: #1e293b;
        `;

        navBrand.parentNode.insertBefore(menuToggle, navMenu);

        menuToggle.addEventListener('click', () => {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
};

window.addEventListener('resize', createMobileMenu);
window.addEventListener('load', createMobileMenu);

console.log('%c👋 Welcome to my portfolio!', 'font-size: 16px; color: #0369a1; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub: https://github.com/kcns008', 'font-size: 12px; color: #475569;');
