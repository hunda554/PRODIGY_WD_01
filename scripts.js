// JavaScript to handle navbar color change and background effects on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const body = document.getElementById('body');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#navbar ul li a');

    // Change navbar color on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        body.style.backgroundColor = '#e0e0e0'; // Light gray background on scroll
    } else {
        navbar.classList.remove('scrolled');
        body.style.backgroundColor = ''; // Revert to original background
    }

    // Highlight active link based on scroll position
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop - 60 && window.scrollY < sectionTop + sectionHeight - 60) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});
