// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.textContent = '☰';
    });
});

// Announcements Auto-Slider
const announcementSlides = document.querySelectorAll('.announcement-slide');
let currentAnnouncement = 0;
let announcementInterval;

function showAnnouncement(n) {
    announcementSlides[currentAnnouncement].classList.remove('active');
    currentAnnouncement = n;
    if (currentAnnouncement >= announcementSlides.length) currentAnnouncement = 0;
    if (currentAnnouncement < 0) currentAnnouncement = announcementSlides.length - 1;
    announcementSlides[currentAnnouncement].classList.add('active');
}

function nextAnnouncement() {
    showAnnouncement(currentAnnouncement + 1);
}

function stopAnnouncementSlider() {
    clearInterval(announcementInterval);
}

function startAnnouncementSlider() {
    stopAnnouncementSlider();
    announcementInterval = setInterval(nextAnnouncement, 5000); // Change every 5 seconds
}

// Start announcements auto-rotation
startAnnouncementSlider();

// Pause announcements when hovering over the announcements container
const announcementsSliderEl = document.querySelector('.announcements-slider');
if (announcementsSliderEl) {
    announcementsSliderEl.addEventListener('mouseenter', stopAnnouncementSlider);
    announcementsSliderEl.addEventListener('mouseleave', startAnnouncementSlider);
}

// Auto Slider
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('sliderDots');
let currentSlide = 0;
let slideInterval;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = n;
    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Start auto-sliding
startSlider();

// Pause on hover
const heroSlider = document.querySelector('.hero-slider');
heroSlider.addEventListener('mouseenter', stopSlider);
heroSlider.addEventListener('mouseleave', startSlider);

// Smooth scrolling for anchor links
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

// Form submission (demo - you'd connect this to a backend)
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
    e.target.reset();
});