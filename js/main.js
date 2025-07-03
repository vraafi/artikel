// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '&#9776;';
document.querySelector('.header .container').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Add hover effects to articles
const articles = document.querySelectorAll('.article-grid article');
articles.forEach(article => {
    article.addEventListener('mouseenter', () => {
        article.style.transform = 'translateY(-5px)';
        article.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    });
    
    article.addEventListener('mouseleave', () => {
        article.style.transform = 'translateY(0)';
        article.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
    });
});

// Lazy Load Images
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// Add active class to current page in navigation
const currentPage = location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});