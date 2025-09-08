// SCRIPT INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize AOS (Animation on Scroll)
  AOS.init({ duration: 700, once: true });

  // 2. Initialize Swiper Slider for Activities
  // Added a check for .activity-slider to only initialize Swiper if the element exists
  const activitySlider = document.querySelector('.activity-slider');
  if (activitySlider) {
    const swiper = new Swiper('.activity-slider', {
      loop: true,
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 }
      },
      pagination: { el: '.swiper-pagination', clickable: true },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      // START OF CHANGE: Added Autoplay configuration
      autoplay: {
        delay: 3000, // 3 seconds delay between slides
        disableOnInteraction: false, // Continue autoplay even after user interaction
      },
      // END OF CHANGE
    });
  }


  // 3. Mobile Menu Logic
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.main-nav a');

  // START OF CHANGE: Added checks for existence before adding event listeners
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav && mainNav.classList.contains('active')) {
          mainNav.classList.remove('active');
        }
      });
    });
  }
  // END OF CHANGE
});

// START OF UPDATE: Obsolete project modal logic and data object have been removed.
// The functions openProjectModal(), closeProjectModal(), and the projectDetails object
// were removed as they are no longer used by the website. Project details are now
// handled by the project-detail.html page, and the data has been moved to data.js.
// END OF UPDATE
