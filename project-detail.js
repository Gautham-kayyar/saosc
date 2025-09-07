// SCRIPT INITIALIZATION for project-detail.html
document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS
  AOS.init({ duration: 700, once: true });

  // Get project ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  // Get elements to populate
  const projectTitleElement = document.getElementById('project-detail-title');
  const projectContentElement = document.getElementById('project-detail-content');
  const projectPageTitleElement = document.getElementById('projectPageTitle');

  // Load project details
  // The 'projectDetails' object is expected to be defined in script.js and globally accessible.
  if (projectId && typeof projectDetails !== 'undefined' && projectDetails[projectId]) {
    const project = projectDetails[projectId];
    projectTitleElement.textContent = project.title;
    projectContentElement.innerHTML = `<p>${project.fullDescription}</p>`;
    projectPageTitleElement.textContent = `${project.title} | Srinivas Aero`;
  } else {
    // Handle case where project ID is not found
    projectTitleElement.textContent = "Project Not Found";
    projectContentElement.innerHTML = "<p>The details for this project could not be loaded. Please go back to the <a href='index.html#projects'>projects section</a>.</p>";
    projectPageTitleElement.textContent = "Project Not Found | Srinivas Aero";
  }

  // Mobile Menu Logic (replicated for consistency on this page)
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.main-nav a');

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
});

// Note: The `openModal()` function for the quiz button is assumed to be
// globally available, likely defined in `script.js` or another shared file.
// It is not redefined here to avoid duplication.