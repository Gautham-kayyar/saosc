// SCRIPT INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize AOS (Animation on Scroll)
  AOS.init({ duration: 700, once: true });

  // 2. Initialize Swiper Slider for Activities
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

  // 3. Mobile Menu Logic
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.main-nav a');

  if (menuToggle && mainNav) { // Added checks for existence
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  if (navLinks) { // Added checks for existence
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (mainNav && mainNav.classList.contains('active')) { // Added check for mainNav existence
          mainNav.classList.remove('active');
        }
      });
    });
  }
});

// PROJECT MODAL LOGIC (Kept as is, though project links no longer use it)
function openProjectModal(projectId) {
  console.log('Opening modal for:', projectId); // Debug log
  const modal = document.getElementById(projectId + 'Modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('Modal opened successfully'); // Debug log
  } else {
    console.error('Modal not found:', projectId + 'Modal'); // Debug log
  }
}

function closeProjectModal(projectId) {
  console.log('Closing modal for:', projectId); // Debug log
  const modal = document.getElementById(projectId + 'Modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    console.log('Modal closed successfully'); // Debug log
  } else {
    console.error('Modal not found:', projectId + 'Modal'); // Debug log
  }
}

// Close modal when clicking outside the content
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('project-modal')) {
    const modalId = e.target.id.replace('Modal', '');
    closeProjectModal(modalId);
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const activeModals = document.querySelectorAll('.project-modal.active');
    activeModals.forEach(modal => {
      const modalId = modal.id.replace('Modal', '');
      closeProjectModal(modalId);
    });
  }
});

// START OF UPDATE: Project Details Data Object
// This object holds the full descriptions for each project,
// which will be used by the new project-detail.html page.
const projectDetails = {
  "cubesat": {
    title: "CubeSat for Real-Time Weather Prediction",
    fullDescription: "The CubeSat for Real-Time Weather Prediction project is an innovative step toward improving the way we monitor and forecast weather conditions. Using a low-cost, lightweight satellite model (CubeSat) mounted on a drone, we aim to create a scalable, accessible platform for atmospheric data collection. This project involves the design, development, and deployment of a miniature satellite equipped with environmental sensors to gather critical meteorological data. The data collected (temperature, humidity, pressure, wind speed, etc.) is then transmitted in real-time to ground stations for processing. The long-term goal is to integrate this data into predictive models to enhance local weather forecasting accuracy and provide valuable insights for agricultural planning, disaster preparedness, and urban development. This project fosters interdisciplinary skills in aerospace engineering, data science, and telecommunications.",
  },
  "drone": {
    title: "Custom-Built Drone Development",
    fullDescription: "At SAOSC, we believe that true learning comes from building and applying technology with our own hands. Our Custom-Built Drone Development & Applications Project is a testament to this philosophy. Instead of relying on pre-assembled kits, we took the challenge of designing, assembling, and testing a drone ourselves. This project covers all aspects of drone engineering, from selecting appropriate motors, propellers, and flight controllers to designing and fabricating the frame using lightweight materials. Members gain experience in electronics, aerodynamics, programming (for flight control and autonomous missions), and remote sensing. Practical applications include aerial photography, package delivery simulations, environmental monitoring, and search and rescue scenarios. This hands-on experience provides a deep understanding of unmanned aerial vehicle (UAV) systems and their potential.",
  },
  "rcplane": {
    title: "Design and Development of an RC Fixed-Wing Aircraft",
    fullDescription: "The Design and Development of an RC Fixed-Wing Aircraft project was our entry point into the world of aeronautics and model aircraft engineering. With curiosity as our guide and a determination to learn, we set out to design and fly our very own RC plane. This project encompasses fundamental aerodynamic principles, material selection, structural design, and remote control systems integration. Students learn about airfoil design, thrust-to-weight ratio, stability, and control mechanisms. The practical build experience, from cutting and shaping foam or balsa wood to installing electronics and conducting flight tests, offers invaluable insights into the challenges and rewards of aerospace design. It serves as a strong foundation for more complex aerial vehicle projects.",
  },
  "aiml": {
    title: "An AI/ML Framework for Smart Data Prediction",
    fullDescription: "As part of our journey into advanced technologies, we developed and implemented an AI/ML project under the guidance of Dhaarini Academy. This project focused on applying machine learning algorithms to solve real-world problems, giving us practical exposure to data processing, model training, and evaluation. The project involved working with datasets, understanding how to clean and prepare data, selecting suitable algorithms, and fine-tuning them to achieve optimal performance. Through this, we gained hands-on experience in classification, regression, and prediction models, while also learning how AI/ML can be applied across domains such as healthcare, aerospace, environment, and automation. Beyond the technical aspects, the project strengthened our skills in problem-solving, teamwork, and critical thinking. It also gave us the confidence to explore cutting-edge applications of AI, building a strong foundation for future research and projects in machine learning and artificial intelligence.",
  },
  "arduino": {
    title: "ARDUINO BASED OBJECT AVOIDANCE CAR",
    fullDescription: "The Arduino-Based Object Avoidance Car project was one of our first steps into the world of electronics, robotics, and embedded systems. Our goal was not just to build a moving car, but to understand how sensors, microcontrollers, and actuators work together to create intelligent behavior. This project involved assembling a chassis, mounting ultrasonic sensors for obstacle detection, integrating motor drivers, and programming an Arduino microcontroller to process sensor data and control the car's movement. Students learned about basic circuit design, C++ programming for Arduino, digital and analog inputs, and algorithm development for autonomous navigation. It’s an excellent introductory project that demystifies robotics and provides a tangible understanding of how code interacts with the physical world.",
  },
};
// END OF UPDATE: Project Details Data Object