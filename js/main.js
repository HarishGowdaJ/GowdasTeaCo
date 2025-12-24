// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Change header style on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Image Slider
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;

    // Initialize slider
    function initSlider() {
        if (slides.length > 0) {
            slides[0].classList.add('active');
        }
    }

    // Show slide
    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach(slide => slide.classList.remove('active'));
        slides[currentSlide].classList.add('active');
    }

    // Event listeners for slider buttons
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
            resetSlideInterval();
        });

        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
            resetSlideInterval();
        });
    }

    // Auto slide
    function startSlideInterval() {
        slideInterval = setInterval(() => {
            showSlide(currentSlide + 1);
        }, 5000);
    }

    // Reset slide interval
    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    // Pause auto slide on hover
    const slider = document.querySelector('.slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        slider.addEventListener('mouseleave', () => {
            startSlideInterval();
        });
    }

    // Initialize slider and start auto-slide
    if (slides.length > 0) {
        initSlider();
        startSlideInterval();
    }

    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the faster

    function animateCounters() {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animateCounters, 1);
            } else {
                counter.innerText = target.toLocaleString();
            }
        });
    }

    // Start counter animation when element is in viewport
    const statsSection = document.querySelector('.stats');
    let animated = false;

    function checkIfInView() {
        if (statsSection && !animated) {
            const statsSectionTop = statsSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (statsSectionTop < windowHeight - 100) {
                animateCounters();
                animated = true;
                window.removeEventListener('scroll', checkIfInView);
            }
        }
    }

    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
    // Check on initial load
    checkIfInView();

    // Google Reviews Integration
    // Note: You'll need to replace 'YOUR_GOOGLE_PLACES_API_KEY' and 'YOUR_PLACE_ID' with actual values
    function loadGoogleReviews() {
        const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
        const placeId = 'YOUR_PLACE_ID';
        const maxReviews = 3;
        
        // This is a placeholder. In a real implementation, you would make an API call to Google Places API
        // and handle the response to display reviews.
        
        // For now, we'll show a message about enabling JavaScript
        const reviewsContainer = document.getElementById('google-reviews');
        if (reviewsContainer) {
            reviewsContainer.innerHTML = `
                <div class="review-card">
                    <div class="review-header">
                        <img src="images/placeholder-avatar.jpg" alt="Reviewer" class="reviewer-avatar">
                        <div>
                            <h4 class="reviewer-name">John Doe</h4>
                            <div class="review-rating">★★★★★</div>
                        </div>
                    </div>
                    <p class="review-text">Amazing tea! The flavors are so rich and authentic. Definitely coming back for more.</p>
                    <p class="review-date">2 weeks ago</p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <img src="images/placeholder-avatar.jpg" alt="Reviewer" class="reviewer-avatar">
                        <div>
                            <h4 class="reviewer-name">Jane Smith</h4>
                            <div class="review-rating">★★★★☆</div>
                        </div>
                    </div>
                    <p class="review-text">Love the ambiance and the tea selection is excellent. The staff is very knowledgeable.</p>
                    <p class="review-date">1 month ago</p>
                </div>
                <div class="review-card">
                    <div class="review-header">
                        <img src="images/placeholder-avatar.jpg" alt="Reviewer" class="reviewer-avatar">
                        <div>
                            <h4 class="reviewer-name">Robert Johnson</h4>
                            <div class="review-rating">★★★★★</div>
                        </div>
                    </div>
                    <p class="review-text">Best chai in town! The masala chai is perfectly spiced and always served hot.</p>
                    <p class="review-date">3 weeks ago</p>
                </div>
            `;
        }
    }

    // Load Google reviews when the page loads
    loadGoogleReviews();

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section');
    
    function highlightNav() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNav);
    
    // Initialize the active link on page load
    highlightNav();
});
